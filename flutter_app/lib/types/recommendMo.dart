class RecommendListResponseMo {
  int? code;
  String? message;
  Data? data;

  RecommendListResponseMo({this.code, this.message, this.data});

  RecommendListResponseMo.fromJson(Map<String, dynamic> json) {
    this.code = json["code"];
    this.message = json["message"];
    this.data = json["data"] == null ? null : Data.fromJson(json["data"]);
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data["code"] = this.code;
    data["message"] = this.message;
    if (this.data != null) data["data"] = this.data?.toJson();
    return data;
  }
}

class Data {
  List<RecommendListMo>? list;

  Data({this.list});

  Data.fromJson(Map<String, dynamic> json) {
    this.list = json["list"] == null
        ? null
        : (json["list"] as List)
            .map((e) => RecommendListMo.fromJson(e))
            .toList();
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    if (this.list != null)
      data["list"] = this.list?.map((e) => e.toJson()).toList();
    return data;
  }
}

class RecommendListMo {
  String? configName;
  String? styleName;
  int? id;
  int? sort;
  String? configType;
  String? styleType;
  String? recommendName;
  String? recommendIcon;
  int? updateAuthorId;
  String? updateAuthorName;
  String? createTime;
  String? updateTime;
  String? isDelete;
  String? createdAt;
  String? updatedAt;
  List<VideoCardMo>? children;

  RecommendListMo({
    this.configName,
    this.styleName,
    this.id,
    this.sort,
    this.configType,
    this.styleType,
    this.recommendName,
    this.recommendIcon,
    this.updateAuthorId,
    this.updateAuthorName,
    this.createTime,
    this.updateTime,
    this.isDelete,
    this.createdAt,
    this.updatedAt,
    this.children,
  });

  RecommendListMo.fromJson(Map<String, dynamic> json) {
    this.configName = json["configName"];
    this.styleName = json["styleName"];
    this.id = json["id"];
    this.sort = json["sort"];
    this.configType = json["configType"];
    this.styleType = json["styleType"];
    this.recommendName = json["recommendName"];
    this.recommendIcon = json["recommendIcon"];
    this.updateAuthorId = json["updateAuthorId"];
    this.updateAuthorName = json["updateAuthorName"];
    this.createTime = json["createTime"];
    this.updateTime = json["updateTime"];
    this.isDelete = json["isDelete"];
    this.createdAt = json["createdAt"];
    this.updatedAt = json["updatedAt"];
    this.children = json["children"] == null
        ? null
        : (json["children"] as List)
            .map((e) => VideoCardMo.fromJson(e))
            .toList();
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data["configName"] = this.configName;
    data["styleName"] = this.styleName;
    data["id"] = this.id;
    data["sort"] = this.sort;
    data["configType"] = this.configType;
    data["styleType"] = this.styleType;
    data["recommendName"] = this.recommendName;
    data["recommendIcon"] = this.recommendIcon;
    data["updateAuthorId"] = this.updateAuthorId;
    data["updateAuthorName"] = this.updateAuthorName;
    data["createTime"] = this.createTime;
    data["updateTime"] = this.updateTime;
    data["isDelete"] = this.isDelete;
    data["createdAt"] = this.createdAt;
    data["updatedAt"] = this.updatedAt;
    if (this.children != null)
      data["children"] = this.children?.map((e) => e.toJson()).toList();
    return data;
  }
}

class VideoCardMo {
  int? id;
  int? sort;
  int? configId;
  int? vodId;
  int? categoryId;
  String? vodName;
  String? imgUrl;
  String? vodArea;
  String? vodYear;
  String? vodRemarks;
  int? vodTotal;
  String? vodContent;
  String? vodActor;
  int? updateAuthorId;
  String? updateAuthorName;
  String? createdAt;
  String? updatedAt;

  VideoCardMo({
    this.id,
    this.sort,
    this.configId,
    this.vodId,
    this.categoryId,
    this.vodName,
    this.imgUrl,
    this.vodArea,
    this.vodYear,
    this.vodRemarks,
    this.vodTotal,
    this.vodContent,
    this.vodActor,
    this.updateAuthorId,
    this.updateAuthorName,
    this.createdAt,
    this.updatedAt,
  });

  VideoCardMo.fromJson(Map<String, dynamic> json) {
    this.id = json["id"];
    this.sort = json["sort"];
    this.configId = json["configId"];
    this.vodId = json["vodId"];
    this.categoryId = json["categoryId"];
    this.vodName = json["vodName"];
    this.imgUrl = json["imgUrl"];
    this.vodArea = json["vodArea"];
    this.vodYear = json["vodYear"];
    this.vodRemarks = json["vodRemarks"];
    this.vodTotal = json["vodTotal"];
    this.vodContent = json["vodContent"];
    this.vodActor = json["vodActor"];
    this.updateAuthorId = json["updateAuthorId"];
    this.updateAuthorName = json["updateAuthorName"];
    this.createdAt = json["createdAt"];
    this.updatedAt = json["updatedAt"];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data["id"] = this.id;
    data["sort"] = this.sort;
    data["configId"] = this.configId;
    data["vodId"] = this.vodId;
    data["categoryId"] = this.categoryId;
    data["vodName"] = this.vodName;
    data["imgUrl"] = this.imgUrl;
    data["vodArea"] = this.vodArea;
    data["vodYear"] = this.vodYear;
    data["vodRemarks"] = this.vodRemarks;
    data["vodTotal"] = this.vodTotal;
    data["vodContent"] = this.vodContent;
    data["vodActor"] = this.vodActor;
    data["updateAuthorId"] = this.updateAuthorId;
    data["updateAuthorName"] = this.updateAuthorName;
    data["createdAt"] = this.createdAt;
    data["updatedAt"] = this.updatedAt;
    return data;
  }
}
