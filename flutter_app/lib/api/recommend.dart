import 'package:dio/src/response.dart';
import 'package:flutter_app/request/index.dart';
import 'package:flutter_app/types/recommendMo.dart';

Future<RecommendListMo> getRecommendList(dynamic data) async {
  var result = await request(
    '/recommend/list',
    data: data,
    method: HttpMethod.GET,
  );

  return RecommendListMo.fromJson(result);
}
