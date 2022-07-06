import type { InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'
import { getRecommendList } from '../api/recommend'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { VideoCard } from '../components/VideoCard'
import { VideoCardUpdate } from '../components/VideoCardUpdate'
import { VideoCardWrapper } from '../components/VideoCardWrapper'

export const getServerSideProps = async () => {
  const result = await getRecommendList({})

  if(result.code === 200) {
    return {
      props: {
        list: result.data!.list
      }
    }
  }

  return {
    props: {},
  }
}

function HomePage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>

      <div className='homepage'>
        <Header active={0}/>

        <div className="app-text">
          <a href="/label/app.html"><i className="icon-download"></i>下载<strong>免费视频分享大全-鲸云视频APP</strong>客户端</a>
          <div className="bg-ball">
          </div>
        </div>

        <main id="index-main" className="wrapper">
          <div className="content">
            {
              props?.list?.map(item => (
                <VideoCardWrapper key={item.id} { ...item } />
              ))
            }
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}


export default HomePage
