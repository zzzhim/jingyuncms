import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter_app/types/categoryVideoMo.dart';

class CategoryProvider with ChangeNotifier, DiagnosticableTreeMixin {
  List<CategoryVideoMo> _categoryList = [];

  List<CategoryVideoMo> get categoryList => _categoryList;

  void updateValue(List<CategoryVideoMo> list) {
    _categoryList = list;
    print(jsonEncode(_categoryList));
    notifyListeners();
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.add(DiagnosticsProperty<List<CategoryVideoMo>>(
      'categoryList',
      categoryList,
    ));
  }
}
