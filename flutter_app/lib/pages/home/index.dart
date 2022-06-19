import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_app/api/recommend.dart';
import 'package:flutter_app/pages/home/tabContent.dart';
import 'package:flutter_app/types/recommendMo.dart';
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

  List<RecommendListMo> list = [];

  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: Tabs.length);

    getRecommendListApi();
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(title: const Text('首页')),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                color: Colors.white,
                alignment: Alignment.centerLeft,
                child: _appBar(),
              ),
              Flexible(
                flex: 1,
                child: _tabBarView(),
              )
            ],
          ),
        ),
      );

  void getRecommendListApi() async {
    try {
      var res = await getRecommendList({});
      print(jsonEncode(res));

      if (res.code == 200) {
        setState(() {
          list = res.data!.list!;
        });
      }
    } catch (e) {
      print(e);
    }
  }

  _appBar() {
    return TabBar(
      controller: _tabController,
      tabs: Tabs,
      labelColor: Colors.red,
      unselectedLabelColor: Colors.black,
      isScrollable: true,
      indicator: UnderlineTabIndicator(
        borderSide: BorderSide(color: Colors.red, width: 2),
      ),
    );
  }

  _tabBarView() {
    return TabBarView(
      controller: _tabController,
      children: Tabs.map((e) => _tabBarViewContent()).toList(),
    );
  }

  Widget _tabBarViewContent() {
    return TabContentWidget(
      recommendListMo: list,
    );
    // return Text('111');
  }
}
