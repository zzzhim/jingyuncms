import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { MiniHeader } from '../../components/MiniHeader'
import type { InferGetServerSidePropsType, GetServerSidePropsContext } from 'next'
import { useRouter } from "next/router"
import { VdeoDetail } from "../../types/category";
import { videoDetail } from '../../api/videoDetail'
import { string } from 'prop-types'
export async function getServerSideProps(context: GetServerSidePropsContext) {
  let data = {}
  const result = await videoDetail({ id: context.query?.id })
  if (result.code === 200 && result.data) {
    data = result.data
  }
  return {
    props: {data},
  }
}

function Page(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const num = router.query.id
  
  return (
    <>
      <Head>
        <title>视频详情页面</title>
      </Head>
      <div className='homepage'>
        <MiniHeader />
        <div className="app-text">
          <a href="/label/app.html"><i className="icon-download"></i>下载<strong>免费视频分享大全-鲸云视频APP</strong>客户端</a>
          <div className="bg-ball">
          </div>
        </div>

        <main id="index-main" className="wrapper">
          <div className="content">
            <Desc datas={props.data} />
            <VideoList />
            {/* <VideoCardWrapper /> */}
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
interface DescProps {
  datas?: VdeoDetail
}
function Desc(props: DescProps) {
  console.log(props.datas,'props')
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
            <a href="" title={data?.vodName}><i className="icon-play"></i></a>
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
                data?.vodClass.split(',').map((item,index) => 
                  <a href="" title={item} className="tag-link">
                    <span className="video-tag-icon">
                      {index == 0?(
                        <i className="icon-cate-zy" ></i>
                      ):''}
                      {item}						     </span>
                  </a>
                ) 
              }
              <a className="tag-link" href="">{data?.vodYear}</a>
              <a className="tag-link" href="">{data?.vodArea}</a>
            </div>
          </div>
          <a href="" className="btn-important btn-large shadow-drop video-info-play" title={"立刻播放" + data?.vodName}><i className="icon-play"></i><strong>立即播放</strong></a>
        </div>

        <div className="video-info-main">

          <div className="video-info-items"><span className="video-info-itemtitle">导演：</span>
            <div className="video-info-item video-info-actor"><span className="slash">/</span>
              <a href="/vodsearch/-----%E6%9C%AA%E7%9F%A5--------.html" target="_blank">未知</a><span className="slash">/</span>						</div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">主演：</span>
            <div className="video-info-item video-info-actor"><span className="slash">/</span>
              <a href="/vodsearch/-%E6%9C%AA%E7%9F%A5------------.html" target="_blank">未知</a><span className="slash">/</span>						</div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">上映：</span>
            <div className="video-info-item">{data?.vodYear}</div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">  备注：</span>
            <div className="video-info-item">{data?.vodRemarks}</div>
          </div>
          <p className="data video-info-items"><span className="text-muted">
            <img src="https://img3.doubanio.com/favicon.ico" style={{ width: '15px', height: '15px' }} /></span>
            <a href="" target="_blank" title="到豆瓣页面查看" rel="nofollow">
              <span style={{ color: '#007711' }}>&nbsp;&nbsp;&nbsp;：奔跑吧 第六季</span></a></p>
          <div className="video-info-items"><span className="video-info-itemtitle">TAG：</span>
            <div className="video-info-item">
              {
                data?.vodWeight.split(',')
              }
            </div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">剧情：</span>
            <div className="video-info-item video-info-content vod_content">
              <span>{data?.vodContent}</span>
              <a href="javaScript:;" className="shrink">收起</a>
            </div>
          </div>
        </div>
        <div className="video-info-footer display">
          <div className="video-info-share">
            <button className="share-btn" data-clipboard-text="www.jingyunshipin.com/voddetail/uIySCS.html 我正在免费视频分享大全-鲸云视频观看《奔跑吧 第六季》，推荐给你一起看！">好影片，与好朋友一起分享<i className="icon-happy"></i></button>
          </div>
          <a href="/vodplay/uIySCS-1-1.html" className="btn-important btn-large shadow-drop" title="立刻播放奔跑吧 第六季"><i className="icon-play"></i><strong>立即播放</strong></a>
        </div>
      </div>
    </div>
  )
}

function VideoList() {
  return (
    <div className="module">
      <div className="module-heading">
        <h2 className="module-title" title="奔跑吧 第六季在线观看列表">在线观看</h2>
        <div className="module-tab module-player-tab ">
          <div className="module-tab-items">
            <div className="module-tab-content">
              <div className="module-tab-item tab-item selected" data-dropdown-value="优酷"><span>优酷</span><small>19</small></div>

              <div className="module-tab-item tab-item" data-dropdown-value="腾讯视频"><span>腾讯视频</span><small>10</small></div>
            </div>
          </div>
        </div>
        <div className="shortcuts-mobile-overlay"></div>
      </div>

      {/* 播放列表 */}
      <div className="module-list module-player-list tab-list sort-list selected" id="glist-1">
        <div className="module-tab module-sorttab">
          <input type="hidden" name="tab-sort" id="tab-sort" className="module-tab-input" />
          <label className="module-tab-name"><i className="icon-sort"></i></label>
          <div className="module-tab-items">
            <div className="module-tab-title">选集<span className="close-drop"><i className="icon-close-o"></i></span><a className="desc sort-button" href="javascript:void(0);"><i className="icon-sort"></i>排序</a></div>
            <div className="module-tab-content">
              <div className="module-blocklist">
                <div className="sort-item" id="sort-item-1">

                  <a href="/vodplay/uIySCS-1-1.html" title="播放奔跑吧 第六季20220512"><span>20220512</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shortcuts-mobile-overlay"></div>
        <div className="module-blocklist scroll-box scroll-box-y">
          <div className="scroll-content">
            <a href="/vodplay/uIySCS-1-1.html" title="播放奔跑吧 第六季20220512"><span>20220512</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Page
