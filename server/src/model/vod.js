import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

const Vod = sequelize.define(
  'vod',
  {
    vodId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      comment: "视频id"
    },
    categoryId: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
      defaultValue: 0,
      comment: "分类id",
    },
    vodName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "视频名称"
    },
    vodNamePinYin: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: "视频名称拼音"
    },
    vodSub: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "副标题",
    },
    vodWeight: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      comment: "视频权重词",
    },
    vodEn: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "别名",
    },
    vodStatus: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      comment: "状态 0-未审 1-已审",
    },
    vodLetter: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      comment: "首字母",
    },
    vodColor: {
      type: DataTypes.STRING(6),
      allowNull: true,
      comment: "颜色",
    },
    vodTag: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "标签",
    },
    vodClass: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "扩展分类",
    },
    vodPic: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "图片",
    },
    vodActor: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "主演",
    },
    vodDirector: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "导演",
    },
    vodWriter: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "编剧",
    },
    vodBehind: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "幕后",
    },
    vodBlurb: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "简介",
    },
    vodRemarks: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "备注",
    },
    vodPubdate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "上映日期",
    },
    vodTotal: {
      type: DataTypes.MEDIUMINT({ length: 8, unsigned: true }),
      allowNull: true,
      comment: "总集数",
    },
    vodSerial: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "连载数",
    },
    vodTv: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "上映电视台",
    },
    vodWeekday: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "节目周期",
    },
    vodArea: {
      type: DataTypes.STRING(20),
      allowNull: true,
      comment: "地区",
    },
    vodLang: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "语言",
    },
    vodYear: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "年份",
    },
    vodVersion: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "版本-dvd,hd,720p",
    },
    vodState: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "资源类别-正片,预告片,花絮",
    },
    vodAuthor: {
      type: DataTypes.STRING(60),
      allowNull: true,
      comment: "编辑人员",
    },
    vodIsend: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      comment: "是否完结",
    },
    vodLock: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      comment: "是否锁定视频",
    },
    vodLevel: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      comment: "推荐级别",
    },
    vodCopyright: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      comment: "是否开启版权提示",
    },
    vodPoints: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: true,
      comment: "访问视频需要积分",
    },
    vodHits: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      comment: "总点击量",
    },
    vodHitsDay: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      comment: "日点击量",
    },
    vodHitsWeek: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      comment: "周点击量",
    },
    vodHitsMonth: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      comment: "月点击量",
    },
    vodDuration: {
      type: DataTypes.STRING(10),
      allowNull: true,
      comment: "时长",
    },
    vodUp: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      comment: "顶数",
    },
    vodDown: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      comment: "踩数",
    },
    vodScore: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
      comment: "平均分",
    },
    vodScoreAll: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      comment: "总评分"
    },
    vodScoreNum: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      comment: "评分次数"
    },
    vodTimeHits: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "点击时间",
    },
    vodTimeMake: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "生成时间",
    },
    vodTrysee: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: true,
      comment: "试看时长分",
    },
    vodDoubanId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true }),
      allowNull: true,
      comment: "豆瓣ID",
    },
    vodDoubanScore: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
      comment: "豆瓣评分",
    },
    // vodRelVod: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    //   comment: "关联视频ids",
    // },
    vodRelArt: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "关联文章ids",
    },
    vodContent: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "详细介绍",
    },
    vodPlayFrom: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "播放组",
    },
    vodPlayNote: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: "播放备注",
    },
    vodPlayUrl: {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: true,
      comment: "播放地址",
    },
    // vodPlot: {
    //   type: DataTypes.TINYINT({ length: 1 }),
    //   allowNull: true,
    //   comment: "是否包含分集剧情",
    // },
    // vodPlotName: {
    //   type: DataTypes.TEXT({ length: "medium" }),
    //   allowNull: true,
    //   comment: "分集剧情名称",
    // },
    // vodPlotDetail: {
    //   type: DataTypes.TEXT({ length: "medium" }),
    //   allowNull: true,
    //   comment: "分集剧情详情",
    // },
    isDelete: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: true,
      defaultValue: "0",
    },
  },
  {
    underscored: true,
    freezeTableName: true,
    // indexes: [],
  }
)

export const VodModel = Vod
