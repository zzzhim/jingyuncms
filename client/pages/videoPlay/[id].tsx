import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { videoList } from '../../api/video'
import { videoDetail } from '../../api/videoDetail'
import { Footer } from '../../components/Footer'
import { MiniHeader } from '../../components/MiniHeader'

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
  return (
    <>
      <Head>
        <title>在线播放{ props.videoDetail?.vodName }</title>
        <meta name="keywords" content={`${props.videoDetail?.vodName},${props.videoDetail?.vodWeight}`} />
        <meta name="description" content={props.videoDetail?.vodBlurb} />
      </Head>

      <div className='homepage'>
        <MiniHeader />

        <div className="app-text">
          <Link href="/label/app.html">
            <i className="icon-download"></i>下载
            <strong>免费视频分享大全-鲸云视频APP</strong>客户端
          </Link>
          <div className="bg-ball">
          </div>
        </div>

        <main id="main" className="wrapper">
          <div className="player-block">
            <div className="content">
              <VideoPlay { ...props } />
            </div>
          </div>

          <div className="content">

          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

function VideoPlay(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div className="player-box">
        <div className="player-box-main">

          <div className="tips-box"><span className="close-btn"><i className="icon-close-o"></i></span>
            <ul className="tips-list">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <li className="swiper-slide">正在播放《{props.videoDetail?.vodName}》20220512 - 优酷</li>
                  <li className="swiper-slide"><span className="btn-main">提醒</span>不要轻易相信视频中的任何广告，谨防上当受骗</li>
                  <li className="swiper-slide"><span className="btn-yellow">技巧</span>如遇视频无法播放或加载速度慢，可尝试切换播放节点或者切换解析</li>
                  <li className="swiper-slide"><span className="btn-yellow">收藏</span>免费视频分享大全-鲸云视频网址：<strong>www.jingyunshipin.com&nbsp; /&nbsp; www.jingyunshipin.com&nbsp; ,记得收藏哟～</strong></li>
                </div></div>
            </ul>
          </div>

          <div className="player-wrapper">
            <div style={{ height: '500px' }}>

            </div>
          </div>
        </div>
      </div>
      <div className="player-info">
        <div className="video-info">
          <div className="video-info-box">
            <div className="video-info-header">
              <h1 className="page-title">
                <Link href={`/voddetail/${props.videoDetail?.id}`} title={props.videoDetail?.vodName}>
                  {props.videoDetail?.vodName}
                </Link>
              </h1>
              <span className="btn-pc page-title">20220512</span>
              <div className="video-info-aux">
                <Link href="/vodtype/xCCCCS.html" title="综艺" className="tag-link">
                  <span className="video-tag-icon">
                    <i className="icon-cate-zy"></i>
                    综艺                </span>
                </Link>

                <div className="tag-link">
                  <span className="slash">/</span>

                  <Link href="/vodshow/CCCCCS---%E7%BB%BC%E8%89%BA--------.html">综艺</Link><span className="slash">/</span>
                </div>

                <Link className="tag-link" href="/vodshow/CCCCCS-----------2022.html">2022	</Link>

                <Link className="tag-link" href="/vodshow/CCCCCS-%E4%B8%AD%E5%9B%BD----------.html">中国	</Link>

              </div>
            </div>
            <div className="video-info-main">
              <div className="video-info-items"><span className="video-info-itemtitle">剧情：</span>
                <div className="video-info-item video-info-content vod_content">
                  <span>《奔跑吧第六季》是浙江卫视推出的户外竞技真人秀，由浙江卫视节目中心星图工作室制作，由李晨、Angelababy、郑恺、沙溢、蔡徐坤、白鹿、周深担任常驻MC，以“奔跑不停，爱你不变”为主题，传递出满满的温暖、幸福及爱意，带领观众开启全新一季的浪漫旅程。</span>
                  {/* <Link href="javaScript:;" className="shrink">收起</Link> */}
                  <span className="shrink">收起</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-player-handle">
            <Link href="/vodplay/uIySCS-1-2.html" className="btn-block-o handle-btn" title="播放《奔跑吧 第六季》下一集"><i className="icon-next"></i><p className="block-name">下一集</p></Link>

            <div className="drop pc"><span className="btn-block-o handle-btn handle-more" title="拿起手机扫一扫"><i className="icon-qrcode"></i>
              <p className="block-name">手机看</p>
            </span>
              <div className="drop-content handle-more-drop">
                <div className="drop-content-box">
                  <div className="drop-content-items">
                    <Link className="btn-qrcode" href={''}>
                      <div className="qrcode-img"></div>
                      <div className="block-name">
                        <p>使用 手机浏览器 扫码观看</p>
                        <strong>奔跑吧 第六季 -20220512</strong></div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="shortcuts-mobile-overlay"></div>
            </div>
            <div className="video-player-handle-more">
              <div className="btn-block-o handle-btn handle-share share-btn" title="分享《奔跑吧 第六季》给朋友一起看" data-clipboard-text="www.jingyunshipin.com/voddetail/uIySCS.html 我正在免费视频分享大全-鲸云视频观看《奔跑吧 第六季》，推荐给你一起看！"><i className="icon-share"></i>
                <p className="block-name">分享</p>
              </div>
              <div className="drop"><span className="btn-block-o handle-btn handle-more"><i className="icon-more"></i>
                <p className="block-name">观影+</p>
              </span>
                <div className="drop-content handle-more-drop">
                  <div className="drop-content-box">
                    <div className="drop-content-items">
                      <Link href={""} className="btn-block-o">
                        <i className="icon-warn"></i>
                        <p className="block-name"><strong>影片报错</strong><br />
                          如遇无法播放请提交给我们</p>
                      </Link>
                      <Link href={""} className="btn-block-o btn-screen">
                        <i className="icon-tv"></i>
                        <p className="block-name">
                          <strong>投屏到电视</strong>
                          <br />
                          教程：把手机影片投到电视上播放
                        </p>
                      </Link></div>
                  </div>
                </div>
                <div className="shortcuts-mobile-overlay"></div>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="player-box-side">
        <div className="module-heading">
          <h2 className="module-title" title="奔跑吧 第六季的在线观看列表">在线观看</h2>
          <div className="module-tab module-player-tab  player-side-tab">
            <input type="hidden" name="tab" id="tab" className="module-tab-input" />
            <label className="module-tab-name"><span className="module-tab-value">优酷</span><i className="icon-arrow-bottom-o"></i></label>
            <div className="module-tab-items">
              <div className="module-tab-title">播放节点列表<span className="close-drop"><i className="icon-close-o"></i></span></div>
              <div className="module-tab-content">

                <div className="module-tab-item tab-item selected" data-dropdown-value="优酷"><span>优酷</span><small>19</small></div>

                <Link className="module-tab-item tab-item" href="/vodplay/uIySCS-2-1.html"><span data-dropdown-value="腾讯视频">腾讯视频</span><small>10</small></Link>

              </div>
            </div>
          </div>
          <div className="shortcuts-mobile-overlay"></div>
        </div>

        <div className="module-list module-player-list tab-list sort-list  selected   player-side-playlist">
          <div className="module-tab module-sorttab">
            <input type="hidden" name="tab-sort" id="tab-sort" className="module-tab-input" />
            <label className="module-tab-name"><i className="icon-sort"></i></label>
            <div className="module-tab-items">
              <div className="module-tab-title">选集<span className="close-drop"><i className="icon-close-o"></i></span><Link className="desc sort-button" href="javascript:void(0);"><i className="icon-sort"></i>排序</Link></div>
              <div className="module-tab-content">
                <div className="module-blocklist">
                  <div className="sort-item" id="sort-item-1">

                    <Link href="/vodplay/uIySCS-1-1.html" className="selected" title="播放奔跑吧 第六季20220512"><span>20220512</span>
                      <div className="playon"><i></i><i></i><i></i><i></i></div>                </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shortcuts-mobile-overlay"></div>
          <div className="module-blocklist scroll-box scroll-box-y">
            <div className="scroll-content">

              <Link href="/vodplay/uIySCS-1-1.html" className="selected" title="播放奔跑吧 第六季20220512"><span>20220512</span>
                <div className="playon"><i></i><i></i><i></i><i></i></div>            </Link>

              <Link href="/vodplay/uIySCS-1-2.html" className="" title="播放奔跑吧 第六季20220513"><span>20220513</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="module-list module-player-list tab-list sort-list    player-side-playlist">
          <div className="module-tab module-sorttab">
            <input type="hidden" name="tab-sort" id="tab-sort" className="module-tab-input" />
            <label className="module-tab-name"><i className="icon-sort"></i></label>
            <div className="module-tab-items">
              <div className="module-tab-title">选集<span className="close-drop"><i className="icon-close-o"></i></span><Link className="desc sort-button" href="javascript:void(0);"><i className="icon-sort"></i>排序</Link></div>
              <div className="module-tab-content">
                <div className="module-blocklist">
                  <div className="sort-item" id="sort-item-2">

                    <Link href="/vodplay/uIySCS-2-1.html" className="" title="播放奔跑吧 第六季2022-05-12"><span>2022-05-12</span>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shortcuts-mobile-overlay"></div>
          <div className="module-blocklist scroll-box scroll-box-y">
            <div className="scroll-content">
              <Link href="/vodplay/uIySCS-2-1.html" className="" title="播放奔跑吧 第六季2022-05-12"><span>2022-05-12</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page
