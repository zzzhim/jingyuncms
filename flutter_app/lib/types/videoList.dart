class VideoListResponseMo {
  int? code;
  String? message;
  Data? data;

  VideoListResponseMo({this.code, this.message, this.data});

  VideoListResponseMo.fromJson(Map<String, dynamic> json) {
    code = json['code'];
    message = json['message'];
    data = json['data'] != null ? new Data.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['code'] = this.code;
    data['message'] = this.message;
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    return data;
  }
}

class Data {
  int? total;
  List<VideoMo>? list;

  Data({this.total, this.list});

  Data.fromJson(Map<String, dynamic> json) {
    total = json['total'];
    if (json['list'] != null) {
      list = <VideoMo>[];
      json['list'].forEach((v) {
        list!.add(new VideoMo.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['total'] = this.total;
    if (this.list != null) {
      data['list'] = this.list!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class VideoMo {
  int? id;
  int? vodId;
  int? categoryId;
  String? vodName;
  String? vodSub;
  String? vodEn;
  int? vodStatus;
  String? vodLetter;
  String? vodColor;
  String? vodTag;
  String? vodClass;
  String? vodPic;
  String? vodActor;
  String? vodDirector;
  String? vodWriter;
  String? vodBehind;
  String? vodBlurb;
  String? vodRemarks;
  String? vodPubdate;
  int? vodTotal;
  String? vodSerial;
  String? vodTv;
  String? vodWeekday;
  String? vodArea;
  String? vodLang;
  String? vodYear;
  String? vodVersion;
  String? vodState;
  String? vodAuthor;
  int? vodIsend;
  int? vodLock;
  int? vodLevel;
  int? vodCopyright;
  int? vodPoints;
  int? vodHits;
  int? vodHitsDay;
  int? vodHitsWeek;
  int? vodHitsMonth;
  String? vodDuration;
  int? vodUp;
  int? vodDown;
  String? vodScore;
  int? vodScoreAll;
  int? vodScoreNum;
  String? vodTime;
  String? vodTimeAdd;
  String? vodTimeHits;
  String? vodTimeMake;
  int? vodTrysee;
  int? vodDoubanId;
  String? vodDoubanScore;
  String? vodReurl;
  String? vodRelVod;
  String? vodRelArt;
  String? vodContent;
  Null? vodNotes;
  String? vodPlayFrom;
  String? vodPlayNote;
  String? vodPlayUrl;
  int? vodPlot;
  String? vodPlotName;
  String? vodPlotDetail;
  String? isDelete;
  String? createdAt;
  String? updatedAt;

  VideoMo(
      {this.id,
      this.vodId,
      this.categoryId,
      this.vodName,
      this.vodSub,
      this.vodEn,
      this.vodStatus,
      this.vodLetter,
      this.vodColor,
      this.vodTag,
      this.vodClass,
      this.vodPic,
      this.vodActor,
      this.vodDirector,
      this.vodWriter,
      this.vodBehind,
      this.vodBlurb,
      this.vodRemarks,
      this.vodPubdate,
      this.vodTotal,
      this.vodSerial,
      this.vodTv,
      this.vodWeekday,
      this.vodArea,
      this.vodLang,
      this.vodYear,
      this.vodVersion,
      this.vodState,
      this.vodAuthor,
      this.vodIsend,
      this.vodLock,
      this.vodLevel,
      this.vodCopyright,
      this.vodPoints,
      this.vodHits,
      this.vodHitsDay,
      this.vodHitsWeek,
      this.vodHitsMonth,
      this.vodDuration,
      this.vodUp,
      this.vodDown,
      this.vodScore,
      this.vodScoreAll,
      this.vodScoreNum,
      this.vodTime,
      this.vodTimeAdd,
      this.vodTimeHits,
      this.vodTimeMake,
      this.vodTrysee,
      this.vodDoubanId,
      this.vodDoubanScore,
      this.vodReurl,
      this.vodRelVod,
      this.vodRelArt,
      this.vodContent,
      this.vodNotes,
      this.vodPlayFrom,
      this.vodPlayNote,
      this.vodPlayUrl,
      this.vodPlot,
      this.vodPlotName,
      this.vodPlotDetail,
      this.isDelete,
      this.createdAt,
      this.updatedAt});

  VideoMo.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    vodId = json['vodId'];
    categoryId = json['categoryId'];
    vodName = json['vodName'];
    vodSub = json['vodSub'];
    vodEn = json['vodEn'];
    vodStatus = json['vodStatus'];
    vodLetter = json['vodLetter'];
    vodColor = json['vodColor'];
    vodTag = json['vodTag'];
    vodClass = json['vodClass'];
    vodPic = json['vodPic'];
    vodActor = json['vodActor'];
    vodDirector = json['vodDirector'];
    vodWriter = json['vodWriter'];
    vodBehind = json['vodBehind'];
    vodBlurb = json['vodBlurb'];
    vodRemarks = json['vodRemarks'];
    vodPubdate = json['vodPubdate'];
    vodTotal = json['vodTotal'];
    vodSerial = json['vodSerial'];
    vodTv = json['vodTv'];
    vodWeekday = json['vodWeekday'];
    vodArea = json['vodArea'];
    vodLang = json['vodLang'];
    vodYear = json['vodYear'];
    vodVersion = json['vodVersion'];
    vodState = json['vodState'];
    vodAuthor = json['vodAuthor'];
    vodIsend = json['vodIsend'];
    vodLock = json['vodLock'];
    vodLevel = json['vodLevel'];
    vodCopyright = json['vodCopyright'];
    vodPoints = json['vodPoints'];
    vodHits = json['vodHits'];
    vodHitsDay = json['vodHitsDay'];
    vodHitsWeek = json['vodHitsWeek'];
    vodHitsMonth = json['vodHitsMonth'];
    vodDuration = json['vodDuration'];
    vodUp = json['vodUp'];
    vodDown = json['vodDown'];
    vodScore = json['vodScore'];
    vodScoreAll = json['vodScoreAll'];
    vodScoreNum = json['vodScoreNum'];
    vodTime = json['vodTime'];
    vodTimeAdd = json['vodTimeAdd'];
    vodTimeHits = json['vodTimeHits'];
    vodTimeMake = json['vodTimeMake'];
    vodTrysee = json['vodTrysee'];
    vodDoubanId = json['vodDoubanId'];
    vodDoubanScore = json['vodDoubanScore'];
    vodReurl = json['vodReurl'];
    vodRelVod = json['vodRelVod'];
    vodRelArt = json['vodRelArt'];
    vodContent = json['vodContent'];
    vodNotes = json['vodNotes'];
    vodPlayFrom = json['vodPlayFrom'];
    vodPlayNote = json['vodPlayNote'];
    vodPlayUrl = json['vodPlayUrl'];
    vodPlot = json['vodPlot'];
    vodPlotName = json['vodPlotName'];
    vodPlotDetail = json['vodPlotDetail'];
    isDelete = json['isDelete'];
    createdAt = json['createdAt'];
    updatedAt = json['updatedAt'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['id'] = this.id;
    data['vodId'] = this.vodId;
    data['categoryId'] = this.categoryId;
    data['vodName'] = this.vodName;
    data['vodSub'] = this.vodSub;
    data['vodEn'] = this.vodEn;
    data['vodStatus'] = this.vodStatus;
    data['vodLetter'] = this.vodLetter;
    data['vodColor'] = this.vodColor;
    data['vodTag'] = this.vodTag;
    data['vodClass'] = this.vodClass;
    data['vodPic'] = this.vodPic;
    data['vodActor'] = this.vodActor;
    data['vodDirector'] = this.vodDirector;
    data['vodWriter'] = this.vodWriter;
    data['vodBehind'] = this.vodBehind;
    data['vodBlurb'] = this.vodBlurb;
    data['vodRemarks'] = this.vodRemarks;
    data['vodPubdate'] = this.vodPubdate;
    data['vodTotal'] = this.vodTotal;
    data['vodSerial'] = this.vodSerial;
    data['vodTv'] = this.vodTv;
    data['vodWeekday'] = this.vodWeekday;
    data['vodArea'] = this.vodArea;
    data['vodLang'] = this.vodLang;
    data['vodYear'] = this.vodYear;
    data['vodVersion'] = this.vodVersion;
    data['vodState'] = this.vodState;
    data['vodAuthor'] = this.vodAuthor;
    data['vodIsend'] = this.vodIsend;
    data['vodLock'] = this.vodLock;
    data['vodLevel'] = this.vodLevel;
    data['vodCopyright'] = this.vodCopyright;
    data['vodPoints'] = this.vodPoints;
    data['vodHits'] = this.vodHits;
    data['vodHitsDay'] = this.vodHitsDay;
    data['vodHitsWeek'] = this.vodHitsWeek;
    data['vodHitsMonth'] = this.vodHitsMonth;
    data['vodDuration'] = this.vodDuration;
    data['vodUp'] = this.vodUp;
    data['vodDown'] = this.vodDown;
    data['vodScore'] = this.vodScore;
    data['vodScoreAll'] = this.vodScoreAll;
    data['vodScoreNum'] = this.vodScoreNum;
    data['vodTime'] = this.vodTime;
    data['vodTimeAdd'] = this.vodTimeAdd;
    data['vodTimeHits'] = this.vodTimeHits;
    data['vodTimeMake'] = this.vodTimeMake;
    data['vodTrysee'] = this.vodTrysee;
    data['vodDoubanId'] = this.vodDoubanId;
    data['vodDoubanScore'] = this.vodDoubanScore;
    data['vodReurl'] = this.vodReurl;
    data['vodRelVod'] = this.vodRelVod;
    data['vodRelArt'] = this.vodRelArt;
    data['vodContent'] = this.vodContent;
    data['vodNotes'] = this.vodNotes;
    data['vodPlayFrom'] = this.vodPlayFrom;
    data['vodPlayNote'] = this.vodPlayNote;
    data['vodPlayUrl'] = this.vodPlayUrl;
    data['vodPlot'] = this.vodPlot;
    data['vodPlotName'] = this.vodPlotName;
    data['vodPlotDetail'] = this.vodPlotDetail;
    data['isDelete'] = this.isDelete;
    data['createdAt'] = this.createdAt;
    data['updatedAt'] = this.updatedAt;
    return data;
  }
}
