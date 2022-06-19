import 'package:flutter/material.dart';
import 'package:flutter_app/types/recommendMo.dart';
import 'package:flutter_app/util/format_urli.dart';
import 'package:flutter_app/widget/cachedImage.dart';

class VideoCard extends StatelessWidget {
  final VideoCardMo? videoMo;

  const VideoCard({Key? key, required this.videoMo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        print(videoMo);
        // HiNavigator.getInstance().onJumpTo(
        //   RouteStatus.detail,
        //   args: {"videoMo": videoMo},
        // );
      },
      child: SizedBox(
        height: 210,
        child: Card(
          margin: EdgeInsets.only(left: 4, right: 4, bottom: 8),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(5),
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
    );
  }

  _itemImage(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Stack(
      children: [
        cachedImage(
          videoMo?.imgUrl ?? '',
          // width: size.width / 3 - 20,
          width: size.width / 3,
          // height: 120,
          height: 151,
        ),
        // FadeInImage.memoryNetwork(
        //   placeholder: kTransparentImage,
        //   image: videoMo.cover ?? "",
        //   width: size.width / 2 - 20,
        //   height: 120,
        //   fit: BoxFit.cover,
        //   alignment: Alignment.center,
        // ),
        Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: Container(
            padding: EdgeInsets.only(
              left: 8,
              right: 8,
              bottom: 3,
              top: 5,
            ),
            decoration: BoxDecoration(
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

  _iconText(IconData? ondemand_video, int? count) {
    String views = "";
    if (IconData != null) {
      views = countFormat(count ?? 0);
    } else {
      views = durationTransform(0);
    }

    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        if (ondemand_video != null)
          Icon(
            ondemand_video,
            color: Colors.white,
            size: 10,
          ),
        Padding(
          padding: EdgeInsets.only(left: 3),
          child: Text(
            views,
            style: TextStyle(
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
        padding: EdgeInsets.only(top: 5, left: 8, right: 8, bottom: 5),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Text(
              videoMo?.vodName ?? '',
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: 12, color: Colors.black87),
            ),
            // _onwer(),
          ],
        ),
      ),
    );
  }

  _onwer() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(12),
              child: cachedImage(
                videoMo?.imgUrl ?? "",
                width: 24,
                height: 24,
              ),
            ),
            Padding(
              padding: EdgeInsets.only(left: 8),
              child: Text(
                videoMo?.vodName ?? "",
                style: TextStyle(fontSize: 10, color: Colors.black87),
              ),
            )
          ],
        ),
        Icon(
          Icons.more_vert_sharp,
          size: 15,
          color: Colors.grey,
        ),
      ],
    );
  }
}
