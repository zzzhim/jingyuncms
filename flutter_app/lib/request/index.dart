import 'package:dio/dio.dart';

// or new Dio with a BaseOptions instance.
var options = BaseOptions(
  // baseUrl: 'http://frp.lovewyf.xyz:7600/api/web',
  baseUrl: 'http://192.168.50.57:4000/api/web',
  connectTimeout: 15000,
  receiveTimeout: 15000,
);

Dio dio = Dio(options);

Future<dynamic> request(
  String path, {
  dynamic data,
  required HttpMethod method,
}) async {
  String methodOption = 'GET';

  if (method == HttpMethod.POST) {
    methodOption = 'POST';
  }

  var result = await dio.request(
    path,
    data: data,
    options: Options(method: methodOption),
  );

  return result.data;
}

enum HttpMethod {
  GET,
  POST,
}
