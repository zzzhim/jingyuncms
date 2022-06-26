import 'package:jingyun_app/request/index.dart';
import 'package:jingyun_app/types/categoryVideoMo.dart';
import 'package:jingyun_app/types/recommendMo.dart';

Future<CategoryVideoResponseMo> getCategoryVideo(dynamic data) async {
  var result = await request(
    '/category/video',
    data: data,
    method: HttpMethod.GET,
  );

  return CategoryVideoResponseMo.fromJson(result);
}
