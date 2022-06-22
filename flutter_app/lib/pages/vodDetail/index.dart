import 'package:chewie/chewie.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app/theme/index.dart';
import 'package:flutter_app/util/black_linear_gradient.dart';
import 'package:flutter_app/util/chewie_video_controls.dart';
import 'package:flutter_app/widget/videoPlayer.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:video_player/video_player.dart';

class VodDetail extends StatefulWidget {
  final int vodId;

  const VodDetail({Key? key, required this.vodId}) : super(key: key);

  @override
  State<VodDetail> createState() => _VodDetailState();
}

class _VodDetailState extends State<VodDetail> {
  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        backgroundColor: BgColor,
        body: Container(
          width: 375.w,
          child: Container(
            width: 375.w,
            height: 280.w,
            child: VideoPlayerWidget(
              vodUrl:
                  'https://apd-a7073031d21d08786f7ca2632971c004.v.smtcdns.com/vipts.tc.qq.com/AXSbMuFyj2uDxV03TK1w3ATm11EanAUqtTJsIhHekMBU/uwMROfz2r5xgoaQXGdGnCWdf64jv9YPnWMBEMDKWpK3B5-CF/zfCUauNyeLGS3Ae6U2743AA9shY5hZBgWKiQ2QsEb9ZS2uCfxMiOLMhWeYRBitPvGIuVxSRQCcX_Y8TcEuorg6Qjwvo9j3F7jrws-481en5K9mb_N9vrx3l0pTse28EqiKlgs4oXb4qRwx08Rv4h18MmnxH1vC_pgZ9dU_S01AcLwts85PdIvw/c0024shykh1.321004.ts.m3u8?ver=4',
            ),
          ),
        ),
      );
}
