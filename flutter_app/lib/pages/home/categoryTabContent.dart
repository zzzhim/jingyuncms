import 'package:flutter/material.dart';
import 'package:jingyun_app/api/videoList.dart';
import 'package:jingyun_app/theme/index.dart';
import 'package:jingyun_app/types/videoList.dart';
import 'package:jingyun_app/widget/videoCard.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/material_footer.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class CategoryTabContentWidget extends StatefulWidget {
  final int categoryId;

  const CategoryTabContentWidget({
    Key? key,
    required this.categoryId,
  }) : super(key: key);

  @override
  State<CategoryTabContentWidget> createState() =>
      _CategoryTabContentWidgetState();
}

class _CategoryTabContentWidgetState extends State<CategoryTabContentWidget> {
  bool loading = false;
  int pageNo = 1;
  List<VideoMo> list = [];

  @override
  void initState() {
    super.initState();

    getVideoListApi();
  }

  getVideoListApi() async {
    try {
      if (loading) {
        return;
      }

      setState(() {
        loading = true;
      });

      var res = await getVideoList({
        "categoryId": widget.categoryId,
        "pageNo": pageNo,
        "pageSize": 10,
      });

      if (res.code == 200) {
        setState(() {
          if (pageNo == 1) {
            list = res.data!.list!;
          } else {
            list = [...list, ...res.data!.list!];
          }
          pageNo = pageNo + 1;
        });
      }
    } catch (e) {
      print(e);
    } finally {
      setState(() {
        loading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return EasyRefresh(
      header: ClassicalHeader(
        refreshText: '继续下拉',
        refreshReadyText: '松开下拉',
        refreshingText: '正在刷新',
        refreshedText: '刷新成功',
        refreshFailedText: '刷新失败',
        // infoText: DateTime(year),
        textColor: PrimaryColor,
      ),
      footer: BallPulseFooter(color: PrimaryColor),
      onRefresh: () async {
        setState(() {
          pageNo = 1;
        });
        getVideoListApi();
      },
      onLoad: () async {
        getVideoListApi();
      },
      child: Container(
        width: 335.w,
        padding: EdgeInsets.all(20.w),
        child: Wrap(
          alignment: WrapAlignment.start,
          children: [
            ...list
                .asMap()
                .entries
                .map(
                  (item) => Container(
                    margin: EdgeInsets.only(
                      right: (item.key + 1) % 3 == 0 ? 0 : 10.w,
                      bottom: 20.w,
                    ),
                    child: VideoCard(
                      id: item.value.id,
                      vodName: item.value.vodName,
                      imgUrl: item.value.vodPic,
                    ),
                  ),
                )
                .toList(),
          ],
        ),
      ),
    );
  }
}
