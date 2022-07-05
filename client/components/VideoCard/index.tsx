// import styles from "./index.module.scss"

import { Video } from "../../types/video"
import { Image } from "../Image"

interface Props extends Video {
  imgUrl?: string
}

function VideoCard(props: Props) {
  return (
    <div className="module-item">
      <div className="module-item-cover">
        <div className="module-item-pic">
          <a href="/voddetail/XIySCS.html" title={props.vodName} >
            <i className="icon-play"></i>
          </a>

          <Image
            src={props?.imgUrl ?? props.vodPic}
            alt={props.vodName}
          />

          <div className="loading"></div>
        </div>
        <div className="module-item-caption">
          <span>{props.vodName}</span>
          <span className="video-class">国产剧</span>
          <span>内地</span>
        </div>
        <div className="module-item-content">
          <div className="module-item-style video-name">
            <a href="/voddetail/XIySCS.html" title={props.vodName}>{props.vodName}</a>
          </div>
          <div className="module-item-style video-tag">
            <a href="/vodsearch/-%E6%9D%8E%E6%89%BF%E9%93%89------------.html" target="_blank">李承铉</a>&nbsp;<a href="/vodsearch/-%E9%99%88%E5%A8%85%E5%AE%89------------.html" target="_blank">陈娅安</a>&nbsp;<a href="/vodsearch/-%E6%9D%8E%E6%B3%B0------------.html" target="_blank">李泰</a>&nbsp;						</div>
          <div className="module-item-style video-text">{props.vodBlurb}</div>
        </div>
      </div>
      <div className="module-item-titlebox">
        <a href="/voddetail/XIySCS.html" className="module-item-title" title={props.vodName}>{props.vodName}</a>
      </div>
      <div className="module-item-text">{props.vodRemarks}</div>
    </div>
  )
}

export { VideoCard }