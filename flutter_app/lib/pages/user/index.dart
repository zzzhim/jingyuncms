import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

class UserPage extends StatefulWidget {
  const UserPage({Key? key}) : super(key: key);

  @override
  State<UserPage> createState() => _UserPageState();
}

class _UserPageState extends State<UserPage> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          margin: EdgeInsets.only(top: MediaQuery.of(context).viewPadding.top),
          padding: EdgeInsets.only(left: 20.w, right: 20.w, bottom: 20.w),
          child: Container(
            height: 500.w,
            alignment: Alignment.center,
            child: Text(
              '登录页面',
              style: TextStyle(color: Colors.white, fontSize: 30.sp),
            ),
          ),
          // child: Row(
          //   mainAxisAlignment: MainAxisAlignment.spaceBetween,
          //   crossAxisAlignment: CrossAxisAlignment.center,
          //   children: [
          //     Icon(
          //       Icons.search,
          //       size: 20.w,
          //       color: Color.fromRGBO(240, 241, 243, 1),
          //     )
          //   ],
          // ),
        ),
      ],
    );
  }
}
