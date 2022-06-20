import 'package:flutter_app/request/index.dart';
import 'package:flutter_app/types/videoList.dart';

Future<VideoListResponseMo> getVideoList(
    Map<String, dynamic> queryParameters) async {
  var result = await request(
    '/video/list',
    data: {},
    queryParameters: queryParameters,
    method: HttpMethod.GET,
  );

  return VideoListResponseMo.fromJson(result);
}
