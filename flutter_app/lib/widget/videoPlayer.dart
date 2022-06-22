import 'package:chewie/chewie.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app/theme/index.dart';
import 'package:flutter_app/util/black_linear_gradient.dart';
import 'package:flutter_app/util/chewie_video_controls.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:video_player/video_player.dart';

class VideoPlayerWidget extends StatefulWidget {
  final String? vodUrl;
  const VideoPlayerWidget({Key? key, this.vodUrl}) : super(key: key);

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
      fullScreenByDefault: false,
      customControls: MaterialChewieControls(
        bottomGradient: blackLinearGradient(),
        // overlayUI: widget.overlayUI, // 头部导航
      ),
      materialProgressColors: _progressColors,
    );
  }

  // _initController() {
  //   videoPlayerController = VideoPlayerController.network(widget?.vodUrl ?? '');
  //   // _onControllerChange(widget?.vodUrl ?? '');

  //   chewieController = ChewieController(
  //     videoPlayerController: videoPlayerController!,
  //     autoPlay: true,
  //     looping: true,
  //     aspectRatio: 16 / 9,
  //     allowMuting: false,
  //     fullScreenByDefault: false,
  //     customControls: MaterialChewieControls(
  //       bottomGradient: blackLinearGradient(),
  //       // overlayUI: widget.overlayUI, // 头部导航
  //     ),
  //     materialProgressColors: _progressColors,
  //   );

  //   return chewieController;
  // }

  @override
  void dispose() {
    chewieController?.dispose();
    videoPlayerController?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double playerHeight = screenWidth / (16 / 9);

    return Container(
      width: screenWidth,
      height: playerHeight,
      child: Chewie(
        controller: chewieController!,
        // controller: _initController(),
      ),
    );
  }
}
