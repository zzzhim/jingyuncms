import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_app/api/recommend.dart';
import 'package:flutter_app/theme/index.dart';
import 'package:flutter_app/types/recommendMo.dart';
import 'package:flutter_app/widget/videoCard.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:flutter_swiper_null_safety/flutter_swiper_null_safety.dart';

class TabContentWidget extends StatefulWidget {
  const TabContentWidget({
    Key? key,
  }) : super(key: key);

  @override
  // ignore: library_private_types_in_public_api
  _TabContentWidgetState createState() => _TabContentWidgetState();
}

class _TabContentWidgetState extends State<TabContentWidget>
    with AutomaticKeepAliveClientMixin {
  final ScrollController _scrollController = ScrollController();

  List<RecommendListMo> list = [];

  @override
  void initState() {
    super.initState();

    getRecommendListApi();
  }

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        // 轮播
        Padding(
          padding: EdgeInsets.only(top: 20.w, bottom: 20.w),
          child: Container(
            height: 168.w,
            child: _swiper(),
          ),
        ),
        ClipRRect(
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(20.w),
            topRight: Radius.circular(20.w),
          ),
          child: Container(
            width: MediaQuery.of(context).size.width,
            padding: EdgeInsets.all(20.w),
            color: const Color.fromRGBO(26, 31, 49, 1),
            child: Column(
              children: [
                ...list.map((data) {
                  return _card(data);
                }),
                Container(
                  padding: EdgeInsets.only(top: 15.w, bottom: 15.w),
                  child: const Center(
                    child: Text(
                      '已经到底部了~',
                      style: TextStyle(
                        fontSize: 14,
                        color: Color.fromRGBO(91, 103, 131, 1),
                      ),
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ],
    );
  }

  // 推荐列表
  void getRecommendListApi() async {
    try {
      var res = await getRecommendList({});

      if (res.code == 200) {
        setState(() {
          list = res.data!.list!;
        });
      }
    } catch (e) {
      // ignore: avoid_print
      print(e);
    }
  }

  _card(RecommendListMo data) {
    if (data.children!.isEmpty) {
      return Container(height: 0);
    }

    return Container(
      margin: EdgeInsets.only(bottom: 10.w),
      child: Column(
        children: [
          Padding(
            padding: EdgeInsets.only(top: 0, bottom: 20.w),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  data.recommendName ?? '',
                  style: const TextStyle(
                    fontSize: 18,
                    color: Color.fromRGBO(91, 103, 131, 1),
                  ),
                ),
              ],
            ),
          ),
          SizedBox(
            width: 335.w,
            child: Wrap(
              spacing: 0,
              runSpacing: 0,
              alignment: WrapAlignment.start,
              children: data.children!.asMap().entries.map(
                (item) {
                  return Container(
                    width: 105.w,
                    margin: EdgeInsets.only(
                      left: item.key % 3 == 0 ? 0 : 10.w,
                      bottom: 20.w,
                    ),
                    child: VideoCard(
                      id: item.value.id,
                      vodName: item.value.vodName,
                      imgUrl: item.value.imgUrl,
                    ),
                  );
                },
              ).toList(),
            ),
          ),
        ],
      ),
    );
  }

  _swiper() {
    return Swiper(
      itemBuilder: (BuildContext context, int index) {
        return ClipRRect(
          borderRadius: BorderRadius.circular(5.w),
          child: Image.network(
            "http://via.placeholder.com/288x188",
            fit: BoxFit.fill,
          ),
        );
      },
      itemCount: 10,
      viewportFraction: 0.8,
      scale: 0.9,
      autoplay: true,
    );
  }

  @override
  void dispose() {
    _scrollController.dispose();
    // TODO: implement dispose
    super.dispose();
  }

  @override
  // TODO: implement wantKeepAlive
  bool get wantKeepAlive => true;
}
