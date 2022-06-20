import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_app/api/recommend.dart';
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
    return RefreshIndicator(
      color: Colors.red,
      onRefresh: () async {
        getRecommendListApi();
      },
      child: MediaQuery.removePadding(
        context: context,
        removeTop: true,
        child: SizedBox(
          width: MediaQuery.of(context).size.width,
          child: ListView(
            controller: _scrollController,
            // 允许滚动
            physics: const AlwaysScrollableScrollPhysics(),
            children: [
              ...list.map((data) {
                return _card(data);
              }),
              Container(
                margin: const EdgeInsets.only(top: 15, bottom: 15),
                child: const Center(
                  child: Text('已经到底部了~'),
                ),
              )
            ],
          ),
        ),
      ),
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
      margin: const EdgeInsets.only(top: 15),
      padding: const EdgeInsets.only(left: 10, right: 10),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(5),
        child: Container(
          padding: EdgeInsets.all(0),
          color: Colors.white,
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.all(15),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      data.recommendName ?? '',
                      style: const TextStyle(fontSize: 18, color: Colors.black),
                    ),
                  ],
                ),
              ),
              Container(
                width: size.width - 50 + 15,
                // color: Colors.white,
                // margin: EdgeInsets.only(left: -8),
                transform: Matrix4.translationValues(-7.5, 0, 0),
                child: Wrap(
                  spacing: 0,
                  runSpacing: 0,
                  alignment: WrapAlignment.start,
                  children: data.children!.map(
                    (item) {
                      return VideoCard(videoMo: item);
                    },
                  ).toList(),
                ),
              ),
            ],
          ),
        ),
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
