import { VideoCard } from "../VideoCard"

// 视频列表
function VideoCardWrapper() {
  return (
    <div className="module">
      <div className="module-heading">
        <h2 className="module-title">连续剧</h2>
        <a className="more" href="/vodtype/qCCCCS.html" title="更多连续剧">
          更多连续剧<i className="icon-arrow-right-o"></i>
        </a>
      </div>

      <div className="module-list module-lines-list">
        <div className="module-items">
          {
            [ ...new Array(10) ].map((item, index) => <VideoCard key={index} />)
          }
        </div>
      </div>
    </div>
  )
}

export { VideoCardWrapper }