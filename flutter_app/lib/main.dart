// Copyright 2013 The Flutter Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:jingyun_app/pages/home/index.dart';
import 'package:jingyun_app/pages/vodDetail/index.dart';
import 'package:jingyun_app/provider/category.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

void main() {
  return runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CategoryProvider()),
      ],
      child: MyApp(),
    ),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    //填入设计稿中设备的屏幕尺寸,单位dp
    return ScreenUtilInit(
      designSize: const Size(375, 896),
      minTextAdapt: true,
      splitScreenMode: true,
      builder: (BuildContext c, child) => MaterialApp(
        builder: (BuildContext ctx, widget) {
          //add this line
          ScreenUtil.init(
            ctx,
            designSize: const Size(375, 896),
            minTextAdapt: true,
            splitScreenMode: true,
          );
          return MediaQuery(
            //Setting font does not change with system font size
            data: MediaQuery.of(ctx).copyWith(textScaleFactor: 1.0),
            child: widget!,
          );
        },
        home: App(),
        // theme: ThemeData(
        //   textTheme: TextTheme(
        //       //要支持下面这个需要使用第一种初始化方式
        //       button: TextStyle(fontSize: 45.sp)),
        // ),
      ),
    );
  }
}

/// The main app.
class App extends StatelessWidget {
  /// Creates an [App].
  App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routeInformationProvider: _router.routeInformationProvider,
      routeInformationParser: _router.routeInformationParser,
      routerDelegate: _router.routerDelegate,
    );
  }

  // 路由
  final GoRouter _router = GoRouter(
    initialLocation: '/vod_detail?id=1',
    // initialLocation: '/',
    routes: <GoRoute>[
      GoRoute(
        name: 'home',
        path: '/',
        builder: (BuildContext context, GoRouterState state) =>
            const HomePage(),
      ),
      GoRoute(
          name: 'vod_detail',
          path: '/vod_detail',
          builder: (BuildContext context, GoRouterState state) {
            var vodId = state.queryParams['id']!;
            return VodDetail(
              vodId: int.parse(vodId),
            );
          }),
    ],
  );
}
