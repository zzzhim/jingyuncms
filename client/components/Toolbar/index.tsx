import Link from "next/link"
import classNames from "classnames"
import React from "react"
interface Props {
  active: any
}
function Toolbar(props: Props) {

  const [isSelected, setisSelected] = React.useState<Number>(0)
  const handleClick = (e: number | React.SetStateAction<Number>) => {
    setisSelected(e)
  }
  return (
    <>
      {/* 导航 */}
      <div className="nav">
        <ul className="nav-menu-items">
          <li className={classNames('nav-menu-item', { selected: !props.active })}>
            <Link href="/" title="免费视频分享大全-鲸云视频首页">
              <i className="icon-home"></i> <span>首页</span>
            </Link>
          </li>

          <li className={classNames('nav-menu-item', { selected: props.active == '1' })} >
            <Link href="/videoClassify/1" title="蓝光&4K">
              <i className="iconfont icon-kongbaiwendang"></i>
              <span>蓝光&4K</span>
            </Link >
          </li>
          <li onClick={(event) => handleClick(2)} className={classNames('nav-menu-item', { selected: props.active == '2' })}>

            <Link href="/videoClassify/2" title="影视">
              <i className="icon-cate-dy"></i>
              <span>影视</span>
            </Link >
          </li>
          <li onClick={(event) => handleClick(3)} className={classNames('nav-menu-item', { selected: props.active == '3' })}>
            <Link href="/videoClassify/3" title="连续剧">
              <i className="icon-cate-ds"></i>
              <span>连续剧</span>
            </Link >
          </li>
          <li onClick={(event) => handleClick(4)} className={classNames('nav-menu-item', { selected: props.active == '4' })}>

            <Link href="/videoClassify/4" title="综艺">
              <i className="icon-cate-zy"></i>
              <span>综艺</span>
            </Link >
          </li>
          <li onClick={(event) => handleClick(5)} className={classNames('nav-menu-item', { selected: props.active == 5 })}>

            <Link href="/videoClassify/5" title="番剧">
              <i className="icon-cate-dm"></i>
              <span>番剧</span>
            </Link >
          </li>
          <li onClick={(event) => handleClick(6)} className={classNames('nav-menu-item', { selected: props.active == 6 })}>


            <Link href="/videoClassify/6" title="海外剧">
              <i className="iconfont icon-kongbaiwendang"></i>
              <span>海外剧</span>
            </Link >
          </li>
          <li className="nav-menu-item  domain plus">
            {/* <Link href="javascript:" title="免费视频分享大全-鲸云视频最新域名">
                  <i className="icon-domain"></i>
                  <span>网址</span><em>+</em>
                </Link> */}
          </li>

          <li className="nav-menu-item">
            <Link href="/label/app.html" title="下载免费视频分享大全-鲸云视频APP"><i className="icon-app pc"></i><span>APP</span></Link>
          </li>
        </ul>
      </div>

      {/* 分类 */}
      <div className="pc">
        <ul className="nav-menu-items">
          <li className="space-line-bold"></li>
          <li className="nav-menu-item drop ">
            <span className="nav-menu-icon">
              <i className="icon-all"></i>
            </span>
            <div className="drop-content sub-block subw500">
              <div className="drop-content-box grid-box">
                <ul className="drop-content-items grid-items">

                  <li className="grid-item">
                    <Link href="/vodtype/KCCCCS.html" title="蓝光&4K">
                      <div className="grid-item-name">蓝光&4K</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/SCCCCS.html" title="影视">
                      <div className="grid-item-name">影视</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/qCCCCS.html" title="连续剧">
                      <div className="grid-item-name">连续剧</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/xCCCCS.html" title="综艺">
                      <div className="grid-item-name">综艺</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/ICCCCS.html" title="番剧">
                      <div className="grid-item-name">番剧</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/2CCCCS.html" title="少儿">
                      <div className="grid-item-name">少儿</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/VCCCCS.html" title="其他">
                      <div className="grid-item-name">其他</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/uCCCCS.html" title="犯罪片">
                      <div className="grid-item-name">犯罪片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/0CCCCS.html" title="纪录片">
                      <div className="grid-item-name">纪录片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/nCCCCS.html" title="奇幻片">
                      <div className="grid-item-name">奇幻片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/rCCCCS.html" title="武侠片">
                      <div className="grid-item-name">武侠片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/wCCCCS.html" title="悬疑片">
                      <div className="grid-item-name">悬疑片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/ACCCCS.html" title="冒险片">
                      <div className="grid-item-name">冒险片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/XCCCCS.html" title="惊悚片">
                      <div className="grid-item-name">惊悚片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/YCCCCS.html" title="动作片">
                      <div className="grid-item-name">动作片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/bCCCCS.html" title="喜剧片">
                      <div className="grid-item-name">喜剧片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/LCCCCS.html" title="爱情片">
                      <div className="grid-item-name">爱情片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/FCCCCS.html" title="科幻片">
                      <div className="grid-item-name">科幻片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/QCCCCS.html" title="恐怖片">
                      <div className="grid-item-name">恐怖片</div>
                    </Link>
                  </li>

                  <li className="grid-item">
                    <Link href="/vodtype/jCCCCS.html" title="剧情片">
                      <div className="grid-item-name">剧情片</div>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
            <div className="shortcuts-mobile-overlay"></div>
          </li>
        </ul>
      </div>

      {/* 观影记录 */}
      <div className="header-module">
        <ul className="nav-menu-items">
          <li className="nav-menu-item drop"><span className="nav-menu-icon"><i className="icon-all"></i></span>
            <div className="drop-content sub-block">
              <div className="drop-content-box grid-box">
                <ul className="drop-content-items grid-items">
                  <li className="grid-item">
                    <Link href="/"><i className="icon-home"></i>
                      <div className="grid-item-name" title="免费视频分享大全-鲸云视频首页">首页</div>
                    </Link>
                  </li>
                  <li className="grid-item">
                    <Link href="/vodtype/KCCCCS.html" title="蓝光&4K">
                      <i className="iconfont icon-kongbaiwendang"></i>
                      <div className="grid-item-name">蓝光&4K</div>
                    </Link>
                  </li>
                  <li className="grid-item">
                    <Link href="/vodtype/SCCCCS.html" title="影视">
                      <i className="icon-cate-dy"></i> 										<div className="grid-item-name">影视</div>
                    </Link>
                  </li>
                  <li className="grid-item">
                    <Link href="/vodtype/qCCCCS.html" title="连续剧">
                      <i className="icon-cate-ds"></i> 										<div className="grid-item-name">连续剧</div>
                    </Link>
                  </li>
                  <li className="grid-item">
                    <Link href="/vodtype/xCCCCS.html" title="综艺">
                      <i className="icon-cate-zy"></i> 										<div className="grid-item-name">综艺</div>
                    </Link>
                  </li>
                  <li className="grid-item">
                    <Link href="/vodtype/ICCCCS.html" title="番剧">
                      <i className="icon-cate-dm"></i> 										<div className="grid-item-name">番剧</div>
                    </Link>
                  </li>
                  <li className="grid-item">
                    <Link href="/vodtype/2CCCCS.html" title="少儿">
                      <i className="iconfont icon-kongbaiwendang"></i>
                      <div className="grid-item-name">少儿</div>
                    </Link>
                  </li>
                  <li className="grid-item">
                    <Link href="/vodtype/VCCCCS.html" title="其他">
                      <i className="iconfont icon-kongbaiwendang"></i>
                      <div className="grid-item-name">其他</div>
                    </Link>
                  </li>
                  <li className="grid-item">
                    <Link href="/label/web.html"><i className="icon-domain"></i>
                      <div className="grid-item-name" title="网址">网址</div>
                    </Link>
                  </li>
                  <li className="grid-item grid-more">
                    <Link className="grid-more-link" href="/vodshow/CCCCCS-----------.html" title="查看全部影片">
                      <div className="grid-item-name">全部影片</div>
                    </Link>
                  </li>
                  <li className="grid-item grid-more android">
                    <Link href="/label/app.html" className="grid-more-link" title="下载免费视频分享大全-鲸云视频APP">
                      <div className="grid-item-name">下载客户端</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="shortcuts-mobile-overlay"></div>
          </li>
          <li className="nav-menu-item nav-menu-search"><i className="icon-search"></i></li>
          <li className="space-line-bold"></li>
          <li className="nav-menu-item drop"><span className="nav-menu-icon"><i className="icon-watch-history"></i></span>
            <div className="drop-content drop-history">
              <div className="drop-content-box">
                <ul className="drop-content-items" id="history">
                  <li className="list-item list-item-title">
                    <Link href="" className="playlist historyclean"><i className="icon-clear"></i></Link>
                    <strong>我的观影记录</strong></li>
                </ul>
              </div>
            </div>
            <div className="shortcuts-mobile-overlay"></div>
          </li>
        </ul>
      </div>
    </>
  )
}

export { Toolbar }