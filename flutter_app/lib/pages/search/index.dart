import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:go_router/go_router.dart';
import 'package:jingyun_app/widget/videoCard.dart';
import 'package:shared_preferences/shared_preferences.dart';

class SearchPage extends StatefulWidget {
  const SearchPage({Key? key}) : super(key: key);

  @override
  State<SearchPage> createState() => _SearchPageState();
}

class _SearchPageState extends State<SearchPage> {
  List<String> keywordList = [];

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    getKeywordList();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: 375.w,
          padding: EdgeInsets.only(top: MediaQuery.of(context).viewPadding.top),
          child: Container(
            width: 375.w,
            padding: EdgeInsets.fromLTRB(20.w, 10.w, 20.w, 0.w),
            child: ClipRRect(
              borderRadius: BorderRadius.all(Radius.circular(30.w)),
              child: Container(
                width: 335.w,
                height: 30.w,
                child: TextField(
                  onSubmitted: _onSubmit,
                  autofocus: true,
                  style: TextStyle(
                    fontSize: 14.sp,
                    color: Colors.white,
                  ),
                  textAlign: TextAlign.start,
                  textAlignVertical: TextAlignVertical.center,
                  decoration: InputDecoration(
                    prefixIcon: Icon(
                      Icons.search_rounded,
                      color: Color.fromRGBO(91, 103, 131, 1),
                      size: 20.w,
                    ),
                    hintText: '请输入搜索内容~',
                    hintStyle: TextStyle(
                      fontSize: 14.sp,
                      color: const Color.fromRGBO(91, 103, 131, 1),
                    ),
                    filled: true,
                    fillColor: const Color.fromRGBO(26, 31, 49, 1),
                    contentPadding: EdgeInsets.only(top: 7.w, bottom: 7.w),
                    border: InputBorder.none,
                    isDense: true,
                  ),
                ),
              ),
            ),
          ),
        ),
        if (!keywordList.isEmpty) _history(),
        _hot(),
      ],
    );
  }

  getKeywordList() async {
    final prefs = await SharedPreferences.getInstance();

    var list = prefs.getStringList('hot_keyword');

    setState(() {
      keywordList = list ?? [];
    });
  }

  removeAll() async {
    final prefs = await SharedPreferences.getInstance();

    prefs.clear();

    getKeywordList();
  }

  // 搜索提交
  _onSubmit(value) async {
    final prefs = await SharedPreferences.getInstance();

    if (keywordList.indexOf(value) == -1) {
      setState(() {
        keywordList = [...keywordList, value];
      });
    }

    prefs.setStringList('hot_keyword', [...keywordList]);

    print(value);
  }

  // 最近热播
  _hot() {
    return Container(
      width: 375.w,
      margin: EdgeInsets.only(top: 60.w),
      child: Column(
        children: [
          Container(
            padding: EdgeInsets.only(left: 20.w, right: 20.w, bottom: 20.w),
            child: Row(
              children: const [
                Text(
                  '最近热播',
                  style: TextStyle(
                    color: Color.fromRGBO(91, 103, 131, 1),
                  ),
                ),
              ],
            ),
          ),
          Container(
            width: 375.w,
            height: 160.w,
            child: ListView(
              scrollDirection: Axis.horizontal,
              children: [
                Container(
                  width: 105.w,
                  margin: EdgeInsets.only(left: 20.w, right: 10.w),
                  child: VideoCard(
                    id: 1,
                    imgUrl: '',
                    vodName: '测试',
                  ),
                ),
                Container(
                  width: 105.w,
                  margin: EdgeInsets.only(right: 10.w),
                  child: VideoCard(
                    id: 1,
                    imgUrl: '',
                    vodName: '测试',
                  ),
                ),
                Container(
                  width: 105.w,
                  margin: EdgeInsets.only(right: 10.w),
                  child: VideoCard(
                    id: 1,
                    imgUrl: '',
                    vodName: '测试',
                  ),
                ),
                Container(
                  width: 105.w,
                  margin: EdgeInsets.only(right: 10.w),
                  child: VideoCard(
                    id: 1,
                    imgUrl: '',
                    vodName: '测试',
                  ),
                ),
                Container(
                  width: 105.w,
                  margin: EdgeInsets.only(right: 20.w),
                  child: VideoCard(
                    id: 1,
                    imgUrl: '',
                    vodName: '测试',
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }

  // 搜索历史记录
  _history() {
    return Container(
      width: 375.w,
      margin: EdgeInsets.only(top: 60.w),
      child: Column(
        children: [
          Container(
            padding: EdgeInsets.only(left: 20.w, right: 20.w, bottom: 20.w),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(
                  '搜索历史',
                  style: TextStyle(
                    color: Color.fromRGBO(91, 103, 131, 1),
                  ),
                ),
                InkWell(
                  onTap: () {
                    removeAll();
                  },
                  child: Icon(
                    Icons.delete_forever_rounded,
                    color: Color.fromRGBO(91, 103, 131, 1),
                    size: 24.sp,
                  ),
                ),
              ],
            ),
          ),
          Container(
            width: 375.w,
            padding: EdgeInsets.only(left: 20.w, right: 20.w),
            child: Wrap(
              children: [
                ...keywordList.map(
                  (item) {
                    return Container(
                      margin: EdgeInsets.only(right: 20.w, bottom: 20.w),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(15.w),
                        child: Container(
                          padding: EdgeInsets.fromLTRB(20.w, 7.w, 20.w, 7.w),
                          color: Color.fromRGBO(26, 31, 49, 1),
                          child: Text(
                            item,
                            style: TextStyle(
                              color: Color.fromRGBO(91, 103, 131, 1),
                              fontSize: 14.sp,
                            ),
                          ),
                        ),
                      ),
                    );
                  },
                ).toList(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
