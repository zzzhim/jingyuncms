
import React from 'react'
import { NoSsr } from '@mui/material'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import axios from 'axios'
import Head from 'next/head'
import dayjs from 'dayjs'
import { redis } from '../utils/redis'
import { handleHlsVideo } from '../utils/handleHlsVideo'

import styles from './index.module.scss'

function Page(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/Dplayer.min.css" />
      </Head>

      <div className={styles.page}>
        <NoSsr>
          <Player { ...props } />
        </NoSsr>
      </div>
    </>
  )
}

function Player(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  React.useEffect(() => {
    (window as any).handleHlsVideo = handleHlsVideo

    window.onload = () => {
      const dp = new (window as any).DPlayer({
        container: document.getElementById('dplayer'),
        video: {
          url: props.videoUrl,
          type: 'auto'
        },
      })
    }
  }, [])

  return (
    <>
      <div className={styles.dplayer} id="dplayer"></div>
    </>
  )
}

interface VideoM3u8CacheType {
  [name: string]: any
}

interface QueryType {
  url?: '',
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = context.query as unknown as QueryType

  if(typeof query.url !== "string" || query.url.length === 0 ) {
    return {
      props: {
        code: '505',
        msg: '解析失败,请反馈',
        From: 'www.jingyunshipin.com',
        videoUrl: '',
        type: '',
      }
    }
  }

  const urlList = query.url.split('.')
  let urlType: string | null = urlList[urlList.length - 1]
  const typeList = [ 'mp4', 'mp3', 'm3u8' ]

  // 检测是否是视频地址，如果为true直接播放
  if(typeList.includes(urlType)) {
    return {
      props: {
        videoUrl: query.url,
        type: urlType
      }
    }
  }

  let videoM3u8Cache: string | null | VideoM3u8CacheType = await redis.get("videoM3u8Cache")

  if(urlType.includes('html')) {
    const res = await axios.get("https://vip.aiaine.com/api/", {
      params: {
        key: "eRMSFr9yF79Bz0haCN",
        // url: "LT-534f4e220a9b48c5332bb1f347d0fbf9"
        url: query.url
      }
    }) as any

    if(res.data.code != '100') {
      const cache = {
        ...(videoM3u8Cache !== null ? JSON.parse(videoM3u8Cache as string) : {}),
        [query.url]: {
          time: dayjs().unix(),
          fileUrl: '',
          fileType: '',
        }
      }

      // 缓存地址
      redis.set("videoM3u8Cache", JSON.stringify({ ...cache }), "EX", 60 * 60 * 24) // 缓存一天

      return {
        props: {
          videoUrl: '',
          type: '',
        }, // will be passed to the page component as props
      }
    }
  }else {
    if(videoM3u8Cache !== null) {
      videoM3u8Cache = JSON.parse(videoM3u8Cache) as VideoM3u8CacheType
  
      const cache = videoM3u8Cache[query.url]
      // 视频地址是否存在缓存
      if(cache) {
        const time = dayjs().unix() // s
        const isMonth = (time - cache.time) > (60 * 60 * 24 * 30) // 超过一个月
  
        if(!isMonth) {
          return {
            props: {
              videoUrl: videoM3u8Cache[query.url].fileUrl,
              type: videoM3u8Cache[query.url].fileType,
            }, // will be passed to the page component as props
          }
        }
      }
    }else {
      const res = await axios.get("https://vip.aiaine.com/api/", {
        params: {
          key: "eRMSFr9yF79Bz0haCN",
          // url: "LT-534f4e220a9b48c5332bb1f347d0fbf9"
          url: query.url
        }
      }) as any

      if(res.data.code != '100') {
        const cache = {
          ...(videoM3u8Cache !== null ? JSON.parse(videoM3u8Cache as string) : {}),
          [query.url]: {
            time: dayjs().unix(),
            fileUrl: '',
            fileType: '',
          }
        }
        // 缓存地址
        redis.set("videoM3u8Cache", JSON.stringify({ ...cache }), "EX", 60 * 60 * 24 * 30) // 缓存一个月

        return {
          props: {
            videoUrl: '',
            type: '',
          }, // will be passed to the page component as props
        }
      }
    }
  }

  return {
    props: {
      code: '505',
      msg: '解析失败,请反馈',
      From: 'www.jingyunshipin.com',
      From_Url: query.url,
      videoUrl: query.url,
      type: 'hls',
    }, // will be passed to the page component as props
  }
}

export default Page