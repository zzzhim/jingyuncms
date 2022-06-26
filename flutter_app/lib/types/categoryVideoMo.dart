class CategoryVideoResponseMo {
  int? code;
  String? message;
  List<CategoryVideoMo>? data;

  CategoryVideoResponseMo({this.code, this.message, this.data});

  CategoryVideoResponseMo.fromJson(Map<String, dynamic> json) {
    code = json['code'];
    message = json['message'];
    if (json['data'] != null) {
      data = <CategoryVideoMo>[];
      json['data'].forEach((v) {
        data!.add(new CategoryVideoMo.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['code'] = this.code;
    data['message'] = this.message;
    if (this.data != null) {
      data['data'] = this.data!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class CategoryVideoMo {
  int? id;
  int? sort;
  int? parentId;
  String? categoryName;
  String? status;
  String? createdAt;
  String? updatedAt;

  CategoryVideoMo(
      {this.id,
      this.sort,
      this.parentId,
      this.categoryName,
      this.status,
      this.createdAt,
      this.updatedAt});

  CategoryVideoMo.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    sort = json['sort'];
    parentId = json['parentId'];
    categoryName = json['categoryName'];
    status = json['status'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['sort'] = this.sort;
    data['parentId'] = this.parentId;
    data['categoryName'] = this.categoryName;
    data['status'] = this.status;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}
