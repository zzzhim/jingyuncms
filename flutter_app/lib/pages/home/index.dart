import 'package:flutter/material.dart';
import 'package:flutter_app/api/categoryVideo.dart';
import 'package:flutter_app/pages/home/categoryTabContent.dart';
import 'package:flutter_app/pages/home/tabContent.dart';
import 'package:flutter_app/provider/category.dart';
import 'package:flutter_app/theme/index.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with TickerProviderStateMixin {
  List<Tab> tabs = [];

  late TabController _tabController;

  @override
  void initState() {
    super.initState();

    _tabController = TabController(vsync: this, length: tabs.length);

    getCategoryVideoApi();
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: BgColor,
      // appBar: AppBar(title: const Text('首页')),
      body: MediaQuery.removePadding(
        context: context,
        removeTop: true,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Container(
              padding: EdgeInsets.only(
                top: MediaQuery.of(context).viewPadding.top,
              ),
              alignment: Alignment.centerLeft,
              child: _appBar(),
            ),
            Flexible(
              flex: 1,
              child: _tabBarView(),
              // child: ListView(
              //   children: [
              //     Container(
              //       width: MediaQuery.of(context).size.width,
              //       height: MediaQuery.of(context).size.height -
              //           MediaQuery.of(context).viewPadding.top,
              //       padding: EdgeInsets.all(0),
              //       child: Column(
              //         children: [
              //           Text((MediaQuery.of(context).size.height -
              //                   MediaQuery.of(context).viewPadding.top)
              //               .toString()),
              //           _tabBarView()
              //         ],
              //       ),
              //     ),
              //   ],
              // ),
            ),
          ],
        ),
      ),
    );
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
            _createTab('推荐'),
            ...list.map((item) => _createTab(item.categoryName!)).toList(),
          ];
        });
      }
    } catch (e) {
      // ignore: avoid_print
      print(e);
    }
  }

  _createTab(String name) {
    return Tab(
      // height: 50,
      child: Text(
        name,
        style: const TextStyle(
          fontSize: 16,
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  _appBar() {
    return Container(
      // margin: EdgeInsets.only(bottom: 15),
      child: TabBar(
        onTap: ((value) {
          print(value);
        }),
        controller: _tabController,
        tabs: tabs,
        labelColor: PrimaryColor,
        unselectedLabelColor: const Color.fromRGBO(91, 103, 131, 1),
        isScrollable: true,
        indicator: const UnderlineTabIndicator(
          borderSide: BorderSide(color: PrimaryColor, width: 2),
        ),
      ),
    );
  }

  _tabBarView() {
    var list = tabs.asMap().entries.map((element) {
      if (element.key == 0) {
        return _tabBarViewContent();
      }

      var categoryList = context.read<CategoryProvider>().categoryList;

      return _tabBarViewCategoryContent(
          categoryList[element.key - 1].id as int);
    }).toList();

    return Container(
      child: TabBarView(
        controller: _tabController,
        children: list,
      ),
    );
  }

  Widget _tabBarViewContent() {
    return const TabContentWidget();
  }

  Widget _tabBarViewCategoryContent(int categoryId) {
    return CategoryTabContentWidget(categoryId: categoryId);
  }
}
