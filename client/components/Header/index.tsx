import Link from "next/link"
import React from "react"
import { Toolbar } from "../Toolbar"
interface Props {
  active: any
}
function Header(props: Props) {
  React.useEffect(() => {
    $(".nav-menu-search").click(function () {
      $(".nav-search").addClass("block")
    })
    $(document).scroll(function () {
      var H = $(document).scrollTop() ?? 0
      if (H > 20) {
        $(".header-content").addClass("header-bg")
      } else {
        $(".header-content").removeClass("header-bg")
      }
      if (H > 140) {
        $(".header-content").addClass("header-bg")
        $(".search-dh").append($(".search-box"))
        $(".nav-menu-search").click(function () {
          $(".nav-search").addClass("block")
        })
      } else {
        $(".header-content").removeClass("header-bg")
        $(".search-main").append($(".search-box"))
      }
    })
  }, [])

  return (
    <>
      <header id="header" className="wrapper">
        <div className="header-content " >
          <div className="banyundog-com">
            <div className="header-logo">
              <h1 className="slogan">鲸云视频</h1>
              <div className="fixed-logo">
                <Link href="/" className="logo" title="免费视频分享大全-鲸云视频"><img src="https://www.qbqbb.cn/mxstatic/image/logo.png" alt="免费视频分享大全-鲸云视频" /></Link>
              </div>
            </div>
          </div>
          <div className="nav-search">
            <form action="/vodsearch/-------------.html" className="search-dh"></form>
          </div>

          <Toolbar active={props.active} />
        </div>
        {
          !props.active &&
          <div id="search-content">
            <div className="index-logo"><span className="logo-s"><img src="https://www.qbqbb.cn/mxstatic/image/logo.png" title="免费视频分享大全-鲸云视频" /></span></div>
            <form action="/vodsearch/-------------.html">
              <div className="search-main">
                <div className="search-box">
                  <input className="search-input ac_wd" id="txtKeywords" type="text" name="wd" placeholder="搜索电影、电视剧、综艺、动漫" />
                  <div className="search-drop">
                    <div className="drop-content-items ac_hot none">
                      <div className="list-item list-item-title"><strong>大家都在搜这些影片</strong></div>
                      <div className="search-tag">
                        <Link href="/vodsearch/%E8%AF%AF%E6%9D%802-------------.html" className="hot "><i className="icon-hot"></i>误杀2</Link>
                        <Link href="/vodsearch/%E6%9A%B4%E8%B5%B0%E8%B4%A2%E7%A5%9E3-------------.html" className="hot "><i className="icon-hot"></i>暴走财神3</Link>
                        <Link href="/vodsearch/%E6%B4%9B%E5%9F%BA-------------.html" className="hot "><i className="icon-hot"></i>洛基</Link>
                        <Link href="/vodsearch/%E9%B9%B0%E7%9C%BC-------------.html" className="hot "><i className="icon-hot"></i>鹰眼</Link>
                        <Link href="/vodsearch/%E5%9B%BD%E7%8E%8B%E6%8E%92%E5%90%8D-------------.html" className=""><i className="icon-hot"></i>国王排名</Link>
                        <Link href="/vodsearch/%E9%B1%BF%E9%B1%BC%E6%B8%B8%E6%88%8F-------------.html" className=""><i className="icon-hot"></i>鱿鱼游戏</Link>
                        <Link href="/vodsearch/%E8%9C%98%E8%9B%9B%E4%BE%A0%EF%BC%9A%E8%8B%B1%E9%9B%84%E6%97%A0%E5%BD%92-------------.html" className=""><i className="icon-hot"></i>蜘蛛侠：英雄无归</Link>
                        <Link href="/vodsearch/%E5%A4%8D%E4%BB%87%E8%80%85%E8%81%94%E7%9B%9F-------------.html" className=""><i className="icon-hot"></i>复仇者联盟</Link>
                        <Link href="/vodsearch/%E9%BB%91%E5%AF%A1%E5%A6%87-------------.html" className=""><i className="icon-hot"></i>黑寡妇</Link>
                        <Link href="/vodsearch/%E8%A1%8C%E5%B0%B8%E8%B5%B0%E8%82%89-------------.html" className=""><i className="icon-hot"></i>行尸走肉</Link>
                        <Link href="/vodsearch/%E6%B4%9B%E5%9F%BA-------------.html" className=""><i className="icon-hot"></i>洛基</Link>
                        <Link href="/vodsearch/%E6%88%91%E8%A2%AB%E9%80%90%E5%87%BA%E9%98%9F%E4%BC%8D%E5%90%8E%E8%BF%87%E4%B8%8A%E6%85%A2%E7%94%9F%E6%B4%BB-------------.html" className=""><i className="icon-hot"></i>我被逐出队伍后过上慢生活</Link>
                        <Link href="/vodsearch/%E8%B0%81%E6%98%AF%E5%87%B6%E6%89%8B-------------.html" className=""><i className="icon-hot"></i>谁是凶手</Link>
                      </div>
                    </div>
                  </div>
                  <Link href="/label/top.html" className="search-btn search-cupfox" id="search-cupfox" title="免费视频分享大全-鲸云视频排行榜" ><i className="iconfont icon-paihangbang1 phb phb"></i></Link>					<button className="search-btn search-go" type="submit"><i className="icon-search"></i></button>
                  <button className="cancel-btn" type="button">取消</button>
                </div>
              </div>
            </form>
          </div>
        }
      </header>
    </>
  )
}

export { Header }