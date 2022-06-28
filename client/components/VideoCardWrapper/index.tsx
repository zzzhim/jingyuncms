import { RecommendList } from "../../types/recommend"
import { VideoCard } from "../VideoCard"

interface Props extends RecommendList {

}

// 视频列表
function VideoCardWrapper(props: Props) {
  return (
    <div className="module">
      <div className="module-heading">
        <h2 className="module-title">{ props?.recommendName }</h2>
        <a
          className="more"
          href="/vodtype/qCCCCS.html"
          title={`更多${props?.recommendName}`}
        >
          更多{ props?.recommendName }<i className="icon-arrow-right-o"></i>
        </a>
      </div>

      <div className="module-list module-lines-list">
        <div className="module-items">
          {
            props.children.map(item => (
              <VideoCard key={item.id} { ...item } />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export { VideoCardWrapper }