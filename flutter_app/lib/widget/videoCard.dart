import 'package:flutter/material.dart';
import 'package:flutter_app/types/recommendMo.dart';
import 'package:flutter_app/util/format_urli.dart';
import 'package:flutter_app/widget/cachedImage.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';

class VideoCard extends StatelessWidget {
  final VideoCardMo? videoMo;

  const VideoCard({Key? key, required this.videoMo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: InkWell(
        onTap: () {
          var id = videoMo!.id;
          GoRouter.of(context).push('/vod_detail?id=$id');
        },
        child: SizedBox(
          width: 105.w,
          height: 210.w,
          child: Card(
            margin: EdgeInsets.only(left: 0, right: 0, bottom: 15.w),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(5.w),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _itemImage(context),
                  _infoText(),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  _itemImage(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Stack(
      children: [
        cachedImage(
          videoMo?.imgUrl ?? '',
          // width: ScreenUtil().setWidth(105),
          width: 105.w,
          height: 139.w,
        ),
        Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: Container(
            padding: EdgeInsets.only(
              left: 8.w,
              right: 8.w,
              bottom: 3.w,
              top: 5.w,
            ),
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.bottomCenter,
                end: Alignment.topCenter,
                colors: [Colors.black54, Colors.transparent],
              ),
            ),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                _iconText(Icons.ondemand_video, 0),
                _iconText(Icons.favorite_border, 0),
                _iconText(null, 0),
              ],
            ),
          ),
        ),
      ],
    );
  }

  _iconText(IconData? ondemandVideo, int? count) {
    String views = "";
    // ignore: unnecessary_null_comparison
    if (IconData != null) {
      views = countFormat(count ?? 0);
    } else {
      views = durationTransform(0);
    }

    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        if (ondemandVideo != null)
          Icon(
            ondemandVideo,
            color: Colors.white,
            size: 10,
          ),
        Padding(
          padding: const EdgeInsets.only(left: 3),
          child: Text(
            views,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 10,
            ),
          ),
        ),
      ],
    );
  }

  _infoText() {
    return Expanded(
      child: Container(
        padding: EdgeInsets.only(top: 5.w, left: 8.w, right: 8.w, bottom: 5.w),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text(
              videoMo?.vodName ?? '',
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 12, color: Colors.black87),
            ),
            // _onwer(),
          ],
        ),
      ),
    );
  }
}
