import Link from "next/link"

function Footer() {

  return (
    <>
      <footer id="footer" className="wrapper pd60">
        {/* <div className="fixed_right_bar">
          <div className="mx-lrmenu mx-lrshow">
            <div className="ant-back-top dbicon" >
              <i className="iconfont icon-a-zhiding5"></i>
            </div>
            <div className="dbicon" id="clothes" >

              <i className="iconfont icon-rijianmoshi"></i>
            </div>
            <div className="dbicon">
              <Link href="/topic.html"><i className="iconfont icon-zhuanti-2"></i></Link>
            </div>
          </div>
          <div className="moremeum">
            <i className="iconfont icon-a-gengduo1"></i>
          </div>
        </div> */}
        <p className="sitemap">
          <img src="/mxstatic/picture/logo.png" height="10" />
          <Link target="_blank" href="/label/about.html">关于</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/label/top.html">排行榜</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/map.html">MAP</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/rss.xml">RSS</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/rss/baidu.xml">Baidu</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/rss/google.xml">Google</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/rss/bing.xml">Bing</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/rss/so.xml">so</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/rss/sogou.xml">Sogou</Link><span className="space-line-bold"></span>
          <Link target="_blank" href="/rss/sm.xml">SM</Link>
        </p>
        <p>本站所有内容均来自互联网分享站点所提供的公开引用资源，未提供资源上传、存储服务。</p>
        {/* <script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1280707512'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1280707512%26show%3Dpic2' type='text/javascript'%3E%3C/script%3E"));</script>
        <script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1280707512'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1280707512%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E"));</script> */}
        {/* <script>
          (function(){
var src = "https://s.ssl.qhres2.com/ssl/ab77b6ea7f3fbf79.js";
          document.write('<script src="' + src + '" id="sozz"><\/script>');
})();
          </script> */}
      </footer>
    </>
  )
}

export { Footer }