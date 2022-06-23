import 'package:chewie/chewie.dart' hide MaterialControls;
import 'package:flutter/material.dart';
import 'package:jingyun_app/theme/index.dart';
import 'package:jingyun_app/util/black_linear_gradient.dart';
import 'package:jingyun_app/util/chewie_video_controls.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:jingyun_app/widget/videoAppBar.dart';
import 'package:jingyun_app/widget/webVideoPlayer.dart';
import 'package:video_player/video_player.dart';

class VideoPlayerWidget extends StatefulWidget {
  final String vodUrl;
  const VideoPlayerWidget(
    this.vodUrl, {
    Key? key,
  }) : super(key: key);

  @override
  State<VideoPlayerWidget> createState() => _VideoPlayerWidgetState();
}

class _VideoPlayerWidgetState extends State<VideoPlayerWidget> {
  VideoPlayerController? videoPlayerController;
  ChewieController? chewieController;

  // 进度条颜色配置
  get _progressColors => ChewieProgressColors(
        playedColor: PrimaryColor,
        handleColor: PrimaryColor,
        backgroundColor: Colors.grey,
        bufferedColor: PrimaryColor.withOpacity(.5),
      );

  @override
  void initState() {
    super.initState();

    videoPlayerController = VideoPlayerController.network(widget?.vodUrl ?? '');
    // _onControllerChange(widget?.vodUrl ?? '');

    chewieController = ChewieController(
      videoPlayerController: videoPlayerController!,
      autoPlay: true,
      looping: true,
      aspectRatio: 16 / 9,
      allowMuting: false,
      allowPlaybackSpeedChanging: false,
      customControls: MaterialControls(
        bottomGradient: blackLinearGradient(),
        overlayUI: VideoAppBar(), // 头部导航
      ),
      materialProgressColors: _progressColors,
    );
  }

  @override
  void dispose() {
    chewieController?.dispose();
    videoPlayerController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double screenHeight = MediaQuery.of(context).size.height;
    double playerHeight = screenWidth / (16 / 9);

    return Container(
      width: screenWidth,
      height: playerHeight > screenHeight ? playerHeight : screenHeight,
      // child: Chewie(
      //   controller: chewieController!,
      // ),
      child: WebVideoPlayer(),
    );
  }
}
