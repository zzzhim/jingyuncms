import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_app/api/categoryVideo.dart';
import 'package:flutter_app/api/recommend.dart';
import 'package:flutter_app/pages/home/tabContent.dart';
import 'package:flutter_app/provider/category.dart';
import 'package:flutter_app/types/recommendMo.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with TickerProviderStateMixin {
  List<Tab> tabs = [];

  List<RecommendListMo> list = [];

  late TabController _tabController;

  @override
  void initState() {
    super.initState();

    _tabController = TabController(vsync: this, length: tabs.length);

    getCategoryVideoApi();
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

      if (res.code == 200) {
        setState(() {
          list = res.data!.list!;
        });
      }
    } catch (e) {
      // ignore: avoid_print
      print(e);
    }
  }

  void getCategoryVideoApi() async {
    try {
      var res = await getCategoryVideo({});

      if (res.code == 200) {
        // ignore: use_build_context_synchronously
        context.read<CategoryProvider>().updateValue(res.data!);
        var list = res.data!.where((element) => element.parentId == 0);
        // tab长度变化后需要重新创建TabController
        _tabController = TabController(vsync: this, length: list.length + 1);

        setState(() {
          tabs = [
            Tab(text: '推荐'),
            ...list.map((item) => Tab(text: item.categoryName)).toList(),
          ];
        });
      }
    } catch (e) {
      // ignore: avoid_print
      print(e);
    }
  }

  _appBar() {
    return TabBar(
      controller: _tabController,
      tabs: tabs,
      labelColor: Colors.red,
      unselectedLabelColor: Colors.black,
      isScrollable: true,
      indicator: const UnderlineTabIndicator(
        borderSide: BorderSide(color: Colors.red, width: 2),
      ),
    );
  }

  _tabBarView() {
    return TabBarView(
      controller: _tabController,
      children: tabs.map((e) => _tabBarViewContent()).toList(),
    );
  }

  Widget _tabBarViewContent() {
    return TabContentWidget(
      recommendListMo: list,
    );
  }
}
