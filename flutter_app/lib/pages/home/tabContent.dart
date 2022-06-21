import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_app/api/recommend.dart';
import 'package:flutter_app/theme/index.dart';
import 'package:flutter_app/types/recommendMo.dart';
import 'package:flutter_app/widget/videoCard.dart';

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
          padding: EdgeInsets.all(20),
          child: Container(
            height: 168,
            color: Colors.white,
            child: Text(('轮播')),
          ),
        ),
        ClipRRect(
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(20),
            topRight: Radius.circular(20),
          ),
          child: Container(
            width: MediaQuery.of(context).size.width,
            padding: EdgeInsets.all(20),
            color: Color.fromRGBO(26, 31, 49, 1),
            child: Column(
              children: [
                ...list.map((data) {
                  return _card(data);
                }),
                Container(
                  padding: const EdgeInsets.only(top: 15, bottom: 15),
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

      print(jsonEncode(res));
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

    final size = MediaQuery.of(context).size;

    return Container(
      margin: EdgeInsets.only(bottom: 10),
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.only(top: 0, bottom: 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: const [
                Text(
                  // data.recommendName ?? '',
                  '电影名称',
                  style: TextStyle(
                    fontSize: 18,
                    color: Color.fromRGBO(91, 103, 131, 1),
                  ),
                ),
              ],
            ),
          ),
          Container(
            width: 335,
            child: Wrap(
              spacing: 0,
              runSpacing: 0,
              alignment: WrapAlignment.start,
              children: data.children!.asMap().entries.map(
                (item) {
                  return Container(
                    margin: EdgeInsets.only(left: item.key % 3 == 0 ? 0 : 10),
                    child: VideoCard(videoMo: item.value),
                  );
                },
              ).toList(),
            ),
          ),
        ],
      ),
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
