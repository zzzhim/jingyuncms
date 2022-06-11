import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { MiniHeader } from '../../components/MiniHeader'
import { VideoCardWrapper } from '../../components/VideoCardWrapper'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>视频播放页面</title>
      </Head>

      <div className='homepage'>
        <MiniHeader />

        <main id="main" className="wrapper">
          <div className="content">
            <VideoCardWrapper />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Page
