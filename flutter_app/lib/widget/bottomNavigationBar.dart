import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:jingyun_app/theme/index.dart';

class BottomNavigationBarWidget extends StatefulWidget {
  const BottomNavigationBarWidget({Key? key}) : super(key: key);

  @override
  State<BottomNavigationBarWidget> createState() =>
      _BottomNavigationBarWidgetState();
}

class _BottomNavigationBarWidgetState extends State<BottomNavigationBarWidget> {
  int currentIndex = 0;

  @override
  Widget build(BuildContext context) {
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

    switch (index) {
      case 0:
        // context.go('/');
        break;
      case 1:
        break;
      case 2:
        // context.go('/search');
        break;
      case 3:
        break;
      default:
    }
  }
}
