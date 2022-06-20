import 'package:flutter/material.dart';
import 'package:flutter_app/types/recommendMo.dart';
import 'package:flutter_app/widget/videoCard.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';

class TabContentWidget extends StatefulWidget {
  // final String categoryName;
  final List<RecommendListMo> recommendListMo;

  const TabContentWidget({
    Key? key,
    required this.recommendListMo,
  }) : super(key: key);

  @override
  _TabContentWidgetState createState() => _TabContentWidgetState();
}

class _TabContentWidgetState extends State<TabContentWidget>
    with AutomaticKeepAliveClientMixin {
  ScrollController _scrollController = ScrollController();

  @override
  Widget build(BuildContext context) {
    return RefreshIndicator(
      child: MediaQuery.removePadding(
        context: context,
        removeTop: true,
        child: Container(
          width: MediaQuery.of(context).size.width,
          child: ListView(
            controller: _scrollController,
            // 允许滚动
            physics: const AlwaysScrollableScrollPhysics(),
            children: [
              ...widget.recommendListMo.map((data) {
                // return Row(
                //   children: [
                //     ...data.children!.map((item) {
                //       return VideoCard(
                //         videoMo: item,
                //       );
                //     })
                //   ],
                // );
                return MasonryGridView.count(
                  padding: EdgeInsets.only(
                    left: 10,
                    right: 10,
                    // top: widget.bannerList != null ? 0 : 10,
                    top: 10,
                  ),
                  shrinkWrap: true,
                  crossAxisCount: 3,
                  itemCount: data.children?.length ?? 0,
                  physics: const NeverScrollableScrollPhysics(),
                  itemBuilder: (context, index) {
                    return VideoCard(
                      videoMo: data.children![index],
                    );
                    // return Text('1');
                  },
                );
              }),
            ],
          ),
        ),
      ),
      color: Colors.red,
      onRefresh: () async {},
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
