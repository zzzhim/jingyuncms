import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { MiniHeader } from '../../components/MiniHeader'
import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { videoDetail } from '../../api/videoDetail'
import React from 'react'
import { VideoDetail } from '../../types/video'
import classNames from 'classnames'
import { videoList } from '../../api/video'
import { VideoCardWrapper } from '../../components/VideoCardWrapper'
import { VideoCard } from '../../components/VideoCard'
import Link from 'next/link'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const result = await videoDetail({ id: context.query?.id })

  if(result.code === 200) {

    const res = await videoList({ category: result.data!.categoryId, pageSize: 20 })

    if(res.code === 200) {
      return {
        props: {
          videoDetail: result.data!,
          videoList: res.data!.list
        }
      }
    }
  }

  return {
    props: {},
  }
}

function Page(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  React.useEffect(() => {
    console.log(props)
  }, [])

  return (
    <>
      <Head>
        <title>视频详情页面</title>
      </Head>

      <div className='homepage'>
        <MiniHeader />
        <div className="app-text">
          <Link href="/label/app.html"><i className="icon-download"></i>下载<strong>免费视频分享大全-鲸云视频APP</strong>客户端</Link>
          <div className="bg-ball">
          </div>
        </div>

        <main id="index-main" className="wrapper">
          <div className="content">
            <Desc datas={props.videoDetail} />

            <VideoList { ...props } />

            {/* <VideoCardWrapper /> */}
            {/* {
              props?.videoList?.map(item => (
                <VideoCardWrapper
                  configName={''}
                  styleName={''} sort={0} configType={''} styleType={''} recommendName={''} recommendIcon={''} updateAuthorId={0} updateAuthorName={''} createTime={''} updateTime={''} children={[]} key={item.id} {...item} />
              ))
            } */}

            <div className="module">
              <div className="module-heading">
                <h2 className="module-title">相关视频</h2>
                <Link
                  className="more"
                  href="/vodtype/qCCCCS.html"
                  title={`更多相关视频`}
                >
                  更多相关视频<i className="icon-arrow-right-o"></i>
                </Link>
              </div>

              <div className="module-list module-lines-list">
                <div className="module-items">
                  {
                    props.videoList?.map(item => (
                      <VideoCard {...item} key={item.id}  />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

interface DescProps {
  datas?: VideoDetail
}

function Desc(props: DescProps) {
  let data = props.datas
  return (
    <div className="box view-heading">
      <div className="mobile-play">
        <div className="module-item-cover">
          <div className="module-item-pic"><img className="lazyload" data-src={data?.vodPic} src={data?.vodPic} /></div>
        </div>
      </div>
      <div className="video-cover">
        <div className="module-item-cover">
          <div className="module-item-pic">
            <Link href="" title={data?.vodName}><i className="icon-play"></i></Link>
            <img className="lazyload" alt={data?.vodName} data-src={data?.vodPic} src={data?.vodPic} />
            <div className="loading"></div>
          </div>
        </div>
      </div>
      <div className="video-info">
        <div className="video-info-header">
          <h1 className="page-title">{data?.vodName}</h1>
          <h2 className="video-subtitle" title={data?.vodEn}>{data?.vodEn}</h2>
          <div className="scroll-box">
            <div className="video-info-aux scroll-content">
              {
                data?.vodClass.split(',').map((item, index) =>
                  <Link href="" title={item} className="tag-link" key={index}>
                    <span className="video-tag-icon">
                      {index == 0 ? (
                        <i className="icon-cate-zy" ></i>
                      ) : ''}
                      {item}
                    </span>
                  </Link>
                )
              }
              <Link className="tag-link" href="">{data?.vodYear}</Link>
              <Link className="tag-link" href="">{data?.vodArea}</Link>
            </div>
          </div>
          <Link href="" className="btn-important btn-large shadow-drop video-info-play" title={"立刻播放" + data?.vodName}><i className="icon-play"></i><strong>立即播放</strong></Link>
        </div>

        <div className="video-info-main">

          <div className="video-info-items"><span className="video-info-itemtitle">导演：</span>
            <div className="video-info-item video-info-actor"><span className="slash">/</span>
              <Link href="/vodsearch/-----%E6%9C%AA%E7%9F%A5--------.html" target="_blank">未知</Link><span className="slash">/</span>						</div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">主演：</span>
            <div className="video-info-item video-info-actor"><span className="slash">/</span>
              <Link href="/vodsearch/-%E6%9C%AA%E7%9F%A5------------.html" target="_blank">未知</Link><span className="slash">/</span>						</div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">上映：</span>
            <div className="video-info-item">{data?.vodYear}</div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">  备注：</span>
            <div className="video-info-item">{data?.vodRemarks}</div>
          </div>
          <p className="data video-info-items"><span className="text-muted">
            <img src="https://img3.doubanio.com/favicon.ico" style={{ width: '15px', height: '15px' }} /></span>
            <Link href="" target="_blank" title="到豆瓣页面查看" rel="nofollow">
              <span style={{ color: '#007711' }}>&nbsp;&nbsp;&nbsp;：奔跑吧 第六季</span></Link></p>
          <div className="video-info-items"><span className="video-info-itemtitle">TAG：</span>
            <div className="video-info-item">
              {
                data?.vodWeight?.split(',')
              }
            </div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">剧情：</span>
            <div className="video-info-item video-info-content vod_content">
              <span>{data?.vodContent}</span>
              {/* <Link href="javaScript:;" className="shrink">收起</Link> */}
              <span className="shrink">收起</span>
            </div>
          </div>
        </div>
        <div className="video-info-footer display">
          <div className="video-info-share">
            <button className="share-btn" data-clipboard-text="www.jingyunshipin.com/voddetail/uIySCS.html 我正在免费视频分享大全-鲸云视频观看《奔跑吧 第六季》，推荐给你一起看！">好影片，与好朋友一起分享<i className="icon-happy"></i></button>
          </div>
          <Link href="/vodplay/uIySCS-1-1.html" className="btn-important btn-large shadow-drop" title="立刻播放奔跑吧 第六季"><i className="icon-play"></i><strong>立即播放</strong></Link>
        </div>
      </div>
    </div>
  )
}

function VideoList(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [ active, setActive ] = React.useState(0)

  return (
    <div className="module">
      <div className="module-heading">
        <h2 className="module-title" title={ props.videoDetail?.vodName + "在线观看列表" }>在线观看</h2>

        <div className="module-tab module-player-tab ">
          <div className="module-tab-items">
            <div className="module-tab-content">
              {
                props.videoDetail?.vodPlayFrom.map((item, index) => (
                  <div
                    className={classNames([
                      "module-tab-item tab-item",
                      {
                        selected: active === index,
                      }
                    ])}
                    data-dropdown-value={item}
                    key={index}
                    onClick={() => setActive(index)}
                  >
                    <span>{item}</span><small>{props.videoDetail?.vodPlayUrl[index].length}</small>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="shortcuts-mobile-overlay"></div>
      </div>

      {
        // 播放列表
        props.videoDetail?.vodPlayUrl.map((item, index) => (
          <div
            className={classNames([
              "module-list module-player-list tab-list sort-list",
              {
                selected: active === index,
              }
            ])}
            key={index}
          >
            <div className="module-blocklist scroll-box scroll-box-y">
              <div className="scroll-content">
                {
                  item.map((target, i) => (
                    <Link
                      href={`/vodplay/${props.videoDetail?.id}`}
                      title={props.videoDetail?.vodName + target.label}
                      key={i}
                    >
                      <span>{ target.label }</span>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}


export default Page
