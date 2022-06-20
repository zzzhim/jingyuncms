import 'package:flutter/material.dart';

class VodDetail extends StatefulWidget {
  final int vodId;

  const VodDetail({Key? key, required this.vodId}) : super(key: key);

  @override
  State<VodDetail> createState() => _VodDetailState();
}

class _VodDetailState extends State<VodDetail> {
  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Scaffold(
        appBar: AppBar(title: const Text('视频详情')),
        body: Center(
          child: Column(
            // mainAxisAlignment: MainAxisAlignment.center,
            children: const <Widget>[
              Text('1'),
            ],
          ),
        ),
      );
}
