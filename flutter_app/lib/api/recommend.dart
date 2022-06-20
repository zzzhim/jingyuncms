import 'package:flutter_app/request/index.dart';
import 'package:flutter_app/types/recommendMo.dart';

Future<RecommendListResponseMo> getRecommendList(dynamic data) async {
  var result = await request(
    '/recommend/list',
    data: data,
    method: HttpMethod.GET,
  );

  return RecommendListResponseMo.fromJson(result);
}
