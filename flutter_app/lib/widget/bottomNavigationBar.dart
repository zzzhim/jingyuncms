import 'package:flutter/material.dart';
import 'package:jingyun_app/theme/index.dart';

class BottomNavigationBarWidget extends StatelessWidget {
  final int currentIndex;
  const BottomNavigationBarWidget({Key? key, required this.currentIndex})
      : super(key: key);

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
          icon: Icon(Icons.account_circle),
          label: '我的',
        ),
      ],
      currentIndex: currentIndex,
      backgroundColor: Color.fromRGBO(8, 20, 33, 1),
      selectedItemColor: PrimaryColor,
      unselectedItemColor: Color.fromRGBO(91, 103, 131, 1),
      // onTap: _onItemTapped,
    );
  }
}
