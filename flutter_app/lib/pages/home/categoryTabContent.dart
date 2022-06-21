import 'package:flutter/material.dart';
import 'package:flutter_app/api/videoList.dart';
import 'package:flutter_app/types/videoList.dart';
import 'package:flutter_app/widget/videoCard1.dart';
import 'package:flutter_easyrefresh/easy_refresh.dart';
import 'package:flutter_easyrefresh/material_header.dart';
import 'package:flutter_easyrefresh/material_footer.dart';

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
    return ClipRRect(
      borderRadius: BorderRadius.only(
        topLeft: Radius.circular(20),
        topRight: Radius.circular(20),
      ),
      child: Container(
        // color: Color.fromRGBO(26, 31, 49, 1),
        color: Colors.red,
        child: Wrap(
          children: [
            ...list.map((e) => VideoCard1(videoMo: e)),
          ],
        ),
      ),
    );
    //   return EasyRefresh(
    //     header: MaterialHeader(),
    //     footer: MaterialFooter(),
    //     onRefresh: () async {
    //       setState(() {
    //         pageNo = 1;
    //       });
    //     },
    //     onLoad: () async {
    //       getVideoListApi();
    //     },
    //     child: Container(
    //       child: Wrap(
    //         children: [
    //           ...list.map((e) => VideoCard1(videoMo: e)),
    //         ],
    //       ),
    //     ),
    //   );
  }
}
