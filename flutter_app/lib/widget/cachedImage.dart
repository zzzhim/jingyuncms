import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';

// 带缓存的image
Widget cachedImage(String url, {double? width, double? height}) {
  return CachedNetworkImage(
    imageUrl: url,
    // imageUrl:
    //     'http://frp.lovewyf.xyz:7600/image/admin_1/2022_06_19/de07f286-f5a4-43b7-8190-80e5ae769af2.png',
    width: width,
    height: height,
    fit: BoxFit.cover,
    placeholder: (
      BuildContext context,
      String url,
    ) {
      return Container(
        color: Colors.grey[600],
        child: Center(
          child: Text(
            "加载失败",
            style: TextStyle(
              color: Colors.grey[400],
            ),
          ),
        ),
      );
    },
    errorWidget: (
      BuildContext context,
      String url,
      dynamic error,
    ) {
      return const Icon(Icons.error);
    },
  );
}
