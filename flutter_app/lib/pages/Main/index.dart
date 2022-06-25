import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:jingyun_app/pages/home/index.dart';
import 'package:jingyun_app/pages/search/index.dart';
import 'package:jingyun_app/theme/index.dart';

class MainPage extends StatefulWidget {
  final int currentIndex;
  const MainPage({
    Key? key,
    required this.currentIndex,
  }) : super(key: key);

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  int currentIndex = 0;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    setState(() {
      currentIndex = widget.currentIndex;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: BgColor,
      body: Stack(
        children: [
          if (currentIndex == 0) const HomePage(),
          if (currentIndex == 2) const SearchPage(),
        ],
      ),
      bottomNavigationBar: _bottomNavigationBar(),
    );
  }

  _bottomNavigationBar() {
    return BottomNavigationBar(
      items: const <BottomNavigationBarItem>[
        BottomNavigationBarItem(
          icon: Icon(Icons.home),
          label: '首页',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.videocam),
          label: '分类',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.search),
          label: '我的',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.account_circle),
          label: '我的',
        ),
      ],
      currentIndex: currentIndex,
      backgroundColor: Color.fromRGBO(8, 20, 33, 1),
      selectedItemColor: PrimaryColor,
      unselectedItemColor: Color.fromRGBO(91, 103, 131, 1),
      onTap: (int i) => _onItemTap(context, i),
      type: BottomNavigationBarType.fixed,
    );
  }

  _onItemTap(BuildContext context, int index) {
    setState(() {
      currentIndex = index;
    });
  }
}
