import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_app/api/recommend.dart';
import 'package:flutter_app/request/index.dart';
import 'package:go_router/go_router.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage>
    with SingleTickerProviderStateMixin {
  List<Tab> Tabs = <Tab>[
    Tab(text: '推荐'),
    Tab(text: '热播'),
    Tab(text: '推荐'),
    Tab(text: '热播'),
  ];

  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: Tabs.length);

    asyncgetList();
  }

  void asyncgetList() async {
    try {
      var response = await getRecommendList({});
      print(response.code);
      print(jsonEncode(response.data!.list));
      print(response.message);
    } catch (e) {
      print(e);
      print(111);
    }
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(title: const Text('首页')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                alignment: Alignment.centerLeft,
                child: TabBar(
                  controller: _tabController,
                  tabs: Tabs,
                  labelColor: Colors.red,
                  unselectedLabelColor: Colors.black,
                  isScrollable: true,
                  indicator: UnderlineTabIndicator(
                    borderSide: BorderSide(color: Colors.red, width: 2),
                  ),
                ),
              ),
              Flexible(
                child: TabBarView(
                  controller: _tabController,
                  children: Tabs.map((e) => const Text('1')).toList(),
                ),
              )
            ],
          ),
        ),
      );

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }
}

// /// The screen of the first page.
// class HomePage extends StatelessWidget {
//   /// Creates a [HomePage].
//   const HomePage({Key? key}) : super(key: key);

//   late TabController _tabController;

//   @override
//   void initState() {
//     super.initState();
//     _tabController = TabController(vsync: this, length: myTabs.length);
//   }

//   @override
//   Widget build(BuildContext context) => Scaffold(
//         appBar: AppBar(title: const Text('首页')),
//         body: Center(
//           child: Column(
//             mainAxisAlignment: MainAxisAlignment.center,
//             children: <Widget>[],
//           ),
//         ),
//       );
// }
