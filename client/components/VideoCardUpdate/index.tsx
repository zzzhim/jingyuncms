import { VideoCard } from "../VideoCard"

// 最近更新
function VideoCardUpdate() {
  return (
    <div className="module">
      <div className="module-heading">
        <h2 className="module-title"><i className="icon-happy" style={{ color: '#FF0000' }}></i>  最新影片</h2>
        <div className="module-tab">
          <input type="hidden" name="tab" id="tab" className="module-tab-input" />
          <label className="module-tab-name"><span className="module-tab-value">全部</span><i className="icon-arrow-bottom"></i></label>
          <div className="module-tab-items">
            <div className="module-tab-title">选择类型<span className="close-drop"><i className="icon-close-o"></i></span></div>
            <div>
              <span className="module-tab-item tab-item selected" data-dropdown-value="全部">全部</span>

              <span className="module-tab-item tab-item" data-dropdown-value="蓝光&4K">蓝光&4K</span>

              <span className="module-tab-item tab-item" data-dropdown-value="影视">影视</span>

              <span className="module-tab-item tab-item" data-dropdown-value="连续剧">连续剧</span>

              <span className="module-tab-item tab-item" data-dropdown-value="综艺">综艺</span>

              <span className="module-tab-item tab-item" data-dropdown-value="番剧">番剧</span>

              <span className="module-tab-item tab-item" data-dropdown-value="少儿">少儿</span>

              <span className="module-tab-item tab-item" data-dropdown-value="其他">其他</span>

            </div>
          </div>
        </div>
        <div className="shortcuts-mobile-overlay"></div>
      </div>

      <div className="module-list module-lines-list">
        <div className="module-items">
          {/* {
            [ ...new Array(20) ].map((item, index) => <VideoCard key={index} />)
          } */}
        </div>
      </div>

      <div className="module-footer">
        <a href="/vodshow/CCCCCS-----------.html" className="load-all" title="更多">查看更多<i className="icon-arrow-right-o"></i></a>
      </div>
    </div>
  )
}

export { VideoCardUpdate }