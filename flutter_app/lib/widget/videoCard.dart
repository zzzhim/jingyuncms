import 'package:flutter/material.dart';
import 'package:flutter_app/types/recommendMo.dart';
import 'package:flutter_app/util/format_urli.dart';
import 'package:flutter_app/widget/cachedImage.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';

class VideoCard extends StatelessWidget {
  // final VideoCardMo? videoMo;
  final int? id;
  final String? vodName;
  final String? imgUrl;

  const VideoCard({
    Key? key,
    this.id,
    this.vodName,
    this.imgUrl,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 105.w,
      height: 160.w,
      child: InkWell(
        onTap: () {
          GoRouter.of(context).push('/vod_detail?id=$id');
        },
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
    );
  }

  _itemImage(BuildContext context) {
    return cachedImage(
      imgUrl!,
      width: 105.w,
      height: 139.w,
    );
  }

  _infoText() {
    return Container(
      height: 20.w,
      // alignment: Alignment.centerLeft,
      alignment: Alignment.bottomLeft,
      child: Text(
        vodName ?? '',
        maxLines: 1,
        overflow: TextOverflow.ellipsis,
        style: TextStyle(
          fontSize: 12.sp,
          color: Color.fromRGBO(240, 241, 243, 1),
        ),
      ),
    );
  }
}
