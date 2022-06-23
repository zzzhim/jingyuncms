import 'dart:io';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

class WebVideoPlayer extends StatefulWidget {
  const WebVideoPlayer({Key? key}) : super(key: key);

  @override
  State<WebVideoPlayer> createState() => _WebVideoPlayerState();
}

class _WebVideoPlayerState extends State<WebVideoPlayer> {
  String videoPath = 'assets/web/video.html';

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    if (Platform.isAndroid) {
      WebView.platform = AndroidWebView();
      setState(() {
        videoPath = "file:///android_asset/flutter_assets/" + videoPath;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return WebView(
      initialUrl:
          "https://player.jingyunshipin.com/?url=https://video.jingyunshipin.com/cache/zzzhim/1648487944144.m3u8",
      javascriptMode: JavascriptMode.unrestricted,
      initialMediaPlaybackPolicy: AutoMediaPlaybackPolicy.always_allow,
      allowsInlineMediaPlayback: true,
    );
  }
}
