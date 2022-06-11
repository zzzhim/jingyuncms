function Footer() {

  return (
    <>
      <footer id="footer" className="wrapper pd60">
        <p className="sitemap">
          <img src="/mxstatic/picture/logo.png" height="10" />
          <a target="_blank" href="/label/about.html">关于</a><span className="space-line-bold"></span>
          <a target="_blank" href="/label/top.html">排行榜</a><span className="space-line-bold"></span>
          <a target="_blank" href="/map.html">MAP</a><span className="space-line-bold"></span>
          <a target="_blank" href="/rss.xml">RSS</a><span className="space-line-bold"></span>
          <a target="_blank" href="/rss/baidu.xml">Baidu</a><span className="space-line-bold"></span>
          <a target="_blank" href="/rss/google.xml">Google</a><span className="space-line-bold"></span>
          <a target="_blank" href="/rss/bing.xml">Bing</a><span className="space-line-bold"></span>
          <a target="_blank" href="/rss/so.xml">so</a><span className="space-line-bold"></span>
          <a target="_blank" href="/rss/sogou.xml">Sogou</a><span className="space-line-bold"></span>
          <a target="_blank" href="/rss/sm.xml">SM</a>
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