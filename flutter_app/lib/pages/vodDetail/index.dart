import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:jingyun_app/theme/index.dart';
import 'package:jingyun_app/widget/videoPlayer.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class VodDetail extends StatefulWidget {
  final int vodId;

  const VodDetail({Key? key, required this.vodId}) : super(key: key);

  @override
  State<VodDetail> createState() => _VodDetailState();
}

class _VodDetailState extends State<VodDetail> with TickerProviderStateMixin {
  TabController? _controller;
  List tabs = ["简介", "评论288"];

  @override
  void initState() {
    super.initState();
    _controller = TabController(length: tabs.length, vsync: this);
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        backgroundColor: BgColor,
        body: InkWell(
          onTap: () {
            GoRouter.of(context).pop();
          },
          child: Container(
            height: 500,
            child: Text(
              widget.vodId.toString(),
              style: TextStyle(
                color: Colors.white,
              ),
            ),
          ),
        ),
        // body: MediaQuery.removePadding(
        //   context: context,
        //   removeTop: true,
        //   child: Column(
        //     children: [
        //       // Container(
        //       //   width: 375.w,
        //       //   height: 280.w,
        //       //   child: VideoPlayerWidget(
        //       //     // 'https://video.jingyunshipin.com/cache/zzzhim/1.m3u8',
        //       //     "http://127.0.0.1:4000/a.m3u8",
        //       //   ),
        //       // ),
        //       _tabBar(),
        //       Flexible(
        //         flex: 1,
        //         child: TabBarView(
        //           controller: _controller,
        //           children: [
        //             Container(
        //               color: Colors.white,
        //               child: Text('1111'),
        //             ),
        //             Container(
        //               color: Colors.white,
        //               child: Text('1111'),
        //             ),
        //           ],
        //         ),
        //       ),
        //     ],
        //   ),
        // ),
      );

  _tabBar() {
    return TabBar(
      tabs: tabs.map<Tab>((tabName) {
        return Tab(
          text: tabName,
        );
      }).toList(),
      controller: _controller,
    );
  }
}
