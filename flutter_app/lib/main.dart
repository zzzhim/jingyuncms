// Copyright 2013 The Flutter Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';
import 'package:flutter_app/pages/home/index.dart';
import 'package:flutter_app/pages/vodDetail/index.dart';
import 'package:flutter_app/provider/category.dart';
import 'package:go_router/go_router.dart';
import 'package:provider/provider.dart';

void main() {
  return runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CategoryProvider()),
      ],
      child: App(),
    ),
  );
}

/// The main app.
class App extends StatelessWidget {
  /// Creates an [App].
  App({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => MaterialApp.router(
        routeInformationProvider: _router.routeInformationProvider,
        routeInformationParser: _router.routeInformationParser,
        routerDelegate: _router.routerDelegate,
      );

  // 路由
  final GoRouter _router = GoRouter(
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
