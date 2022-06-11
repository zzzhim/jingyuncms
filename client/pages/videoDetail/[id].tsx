import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { MiniHeader } from '../../components/MiniHeader'
import { VideoCard } from '../../components/VideoCard'
import { VideoCardWrapper } from '../../components/VideoCardWrapper'

const Page: NextPage = () => {
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
            <Desc />

            <VideoList />

            <VideoCardWrapper />
            <VideoCardWrapper />
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

function Desc() {
  return (
    <div className="box view-heading">
      <div className="mobile-play">
        <div className="module-item-cover">
          <div className="module-item-pic"><img className="lazyload" data-src="https://www.qbqbb.cn/upload/vod/20220605-1/fc08b43db1b70b258ecda10e31b2d6ba.jpg" src="https://www.qbqbb.cn/mxstatic/image/loading.gif" /></div>
        </div>
      </div>
      <div className="video-cover">
        <div className="module-item-cover">
          <div className="module-item-pic">
            <a href="/vodplay/uIySCS-1-1.html" title="立刻播放奔跑吧 第六季"><i className="icon-play"></i></a><img className="lazyload" alt="奔跑吧 第六季" data-src="https://www.qbqbb.cn/upload/vod/20220605-1/fc08b43db1b70b258ecda10e31b2d6ba.jpg" src="https://www.qbqbb.cn/mxstatic/image/loading.gif" />
            <div className="loading"></div>
          </div>
        </div>
      </div>
      <div className="video-info">
        <div className="video-info-header">
          <h1 className="page-title">奔跑吧 第六季</h1>
          <h2 className="video-subtitle" title="又名：benpaobadiliuji">benpaobadiliuji</h2>
          <div className="scroll-box">
            <div className="video-info-aux scroll-content">
              <a href="/vodtype/xCCCCS.html" title="综艺" className="tag-link">
                <span className="video-tag-icon">
                  <i className="icon-cate-zy"></i>
                  综艺						     </span>
              </a>
              <div className="tag-link">
                <span className="slash">/</span>

                <a href="/vodshow/CCCCCS---%E7%BB%BC%E8%89%BA--------.html">综艺</a><span className="slash">/</span>
              </div>

              <a className="tag-link" href="/vodshow/CCCCCS-----------2022.html">2022	</a>

              <a className="tag-link" href="/vodshow/CCCCCS-%E4%B8%AD%E5%9B%BD----------.html">中国	</a>
            </div>
          </div>
          <a href="/vodplay/uIySCS-1-1.html" className="btn-important btn-large shadow-drop video-info-play" title="立刻播放奔跑吧 第六季"><i className="icon-play"></i><strong>立即播放</strong></a>
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
            <div className="video-info-item">2022-05-13</div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">  备注：</span>
            <div className="video-info-item">更新至06-10期</div>
          </div>
          <p className="data video-info-items"><span className="text-muted"><img src="https://img3.doubanio.com/favicon.ico" style={{ width: '15px', height: '15px' }} /></span><a href="https://search.douban.com/movie/subject_search?search_text=奔跑吧 第六季" target="_blank" title="到豆瓣页面查看" rel="nofollow"><span style={{ color: '#007711' }}>&nbsp;&nbsp;&nbsp;：奔跑吧 第六季</span></a></p>
          <div className="video-info-items"><span className="video-info-itemtitle">TAG：</span>
            <div className="video-info-item"><a href="/vodsearch/------------%E5%A5%94%E8%B7%91%E5%90%A7-.html" target="_blank">奔跑吧</a>&nbsp;<a href="/vodsearch/------------%E7%AC%AC%E5%85%AD%E5%AD%A3-.html" target="_blank">第六季</a>&nbsp;<a href="/vodsearch/------------%E5%A5%94%E8%B7%91-.html" target="_blank">奔跑</a>&nbsp;<a href="/vodsearch/------------%E7%AC%AC%E5%85%AD-.html" target="_blank">第六</a>&nbsp;</div>
          </div>
          <div className="video-info-items"><span className="video-info-itemtitle">剧情：</span>
            <div className="video-info-item video-info-content vod_content">
              <span>《奔跑吧第六季》是浙江卫视推出的户外竞技真人秀，由浙江卫视节目中心星图工作室制作，由李晨、Angelababy、郑恺、沙溢、蔡徐坤、白鹿、周深担任常驻MC，以“奔跑不停，爱你不变”为主题，传递出满满的温暖、幸福及爱意，带领观众开启全新一季的浪漫旅程。</span>
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
