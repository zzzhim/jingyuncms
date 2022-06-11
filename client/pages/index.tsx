import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { VideoCard } from '../components/VideoCard'
import { VideoCardUpdate } from '../components/VideoCardUpdate'
import { VideoCardWrapper } from '../components/VideoCardWrapper'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>首页</title>
      </Head>

      <div className='homepage'>
        <Header />

        <div className="app-text">
          <a href="/label/app.html"><i className="icon-download"></i>下载<strong>免费视频分享大全-鲸云视频APP</strong>客户端</a>
          <div className="bg-ball">
          </div>
        </div>

        <main id="index-main" className="wrapper">
          <div className="content">
            <VideoCardWrapper />
            <VideoCardWrapper />
            <VideoCardWrapper />
            <VideoCardUpdate />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}


export default Home
