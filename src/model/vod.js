import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

const MacVod = sequelize.define(
  'vod',
  {
    vodId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      // primaryKey: true,
      // autoIncrement: true,
      field: 'vod_id',
      comment: "视频id"
    },
    categoryId: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
      defaultValue: 0,
      field: 'category_id',
      comment: "分类id",
    },
    vodName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_name',
      comment: "视频名称"
    },
    vodSub: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_sub',
      comment: "副标题",
    },
    vodEn: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_en',
      comment: "别名",
    },
    vodStatus: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      field: 'vod_status',
      comment: "状态 0-未审 1-已审",
    },
    vodLetter: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      field: 'vod_letter',
      comment: "首字母",
    },
    vodColor: {
      type: DataTypes.STRING(6),
      allowNull: true,
      field: 'vod_color',
      comment: "颜色",
    },
    vodTag: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'vod_tag',
      comment: "标签",
    },
    vodClass: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_class',
      comment: "扩展分类",
    },
    vodPic: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_pic',
      comment: "图片",
    },
    vodActor: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_actor',
      comment: "主演",
    },
    vodDirector: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_director',
      comment: "导演",
    },
    vodWriter: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'vod_writer',
      comment: "编剧",
    },
    vodBehind: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'vod_behind',
      comment: "幕后",
    },
    vodBlurb: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_blurb',
      comment: "简介",
    },
    vodRemarks: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'vod_remarks',
      comment: "备注",
    },
    vodPubdate: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'vod_pubdate',
      comment: "上映日期",
    },
    vodTotal: {
      type: DataTypes.MEDIUMINT({ length: 8, unsigned: true }),
      allowNull: true,
      field: 'vod_total',
      comment: "总集数",
    },
    vodSerial: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'vod_serial',
      comment: "连载数",
    },
    vodTv: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'vod_tv',
      comment: "上映电视台",
    },
    vodWeekday: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'vod_weekday',
      comment: "节目周期",
    },
    vodArea: {
      type: DataTypes.STRING(20),
      allowNull: true,
      field: 'vod_area',
      comment: "地区",
    },
    vodLang: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'vod_lang',
      comment: "语言",
    },
    vodYear: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'vod_year',
      comment: "年份",
    },
    vodVersion: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'vod_version',
      comment: "版本-dvd,hd,720p",
    },
    vodState: {
      type: DataTypes.STRING(30),
      allowNull: true,
      field: 'vod_state',
      comment: "资源类别-正片,预告片,花絮",
    },
    vodAuthor: {
      type: DataTypes.STRING(60),
      allowNull: true,
      field: 'vod_author',
      comment: "编辑人员",
    },
    vodIsend: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      field: 'vod_isend',
      comment: "是否完结",
    },
    vodLock: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      field: 'vod_lock',
      comment: "是否锁定视频",
    },
    vodLevel: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      field: 'vod_level',
      comment: "推荐级别",
    },
    vodCopyright: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      field: 'vod_copyright',
      comment: "是否开启版权提示",
    },
    vodPoints: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: true,
      field: 'vod_points',
      comment: "访问视频需要积分",
    },
    vodHits: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      field: 'vod_hits',
      comment: "总点击量",
    },
    vodHitsDay: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      field: 'vod_hits_day',
      comment: "日点击量",
    },
    vodHitsWeek: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      field: 'vod_hits_week',
      comment: "周点击量",
    },
    vodHitsMonth: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      field: 'vod_hits_month',
      comment: "月点击量",
    },
    vodDuration: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'vod_duration',
      comment: "时长",
    },
    vodUp: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      field: 'vod_up',
      comment: "顶数",
    },
    vodDown: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      field: 'vod_down',
      comment: "踩数",
    },
    vodScore: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
      field: 'vod_score',
      comment: "平均分",
    },
    vodScoreAll: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      field: 'vod_score_all',
      comment: "总评分"
    },
    vodScoreNum: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: true,
      field: 'vod_score_num',
      comment: "评分次数"
    },
    vodTime: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_time',
      comment: "更新时间",
    },
    vodTimeAdd: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_time_add',
      comment: "添加时间",
    },
    vodTimeHits: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_time_hits',
      comment: "点击时间",
    },
    vodTimeMake: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_time_make',
      comment: "生成时间",
    },
    vodTrysee: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: true,
      field: 'vod_trysee',
      comment: "试看时长分",
    },
    vodDoubanId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true }),
      allowNull: true,
      field: 'vod_douban_id',
      comment: "豆瓣ID",
    },
    vodDoubanScore: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: true,
      field: 'vod_douban_score',
      comment: "豆瓣评分",
    },
    vodReurl: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_reurl',
      comment: "来源地址",
    },
    vodRelVod: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_rel_vod',
      comment: "关联视频ids",
    },
    vodRelArt: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_rel_art',
      comment: "关联文章ids",
    },
    vodContent: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'vod_content',
      comment: "详细介绍",
    },
    vodPlayFrom: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_play_from',
      comment: "播放组",
    },
    vodPlayNote: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'vod_play_note',
      comment: "播放备注",
    },
    vodPlayUrl: {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: true,
      field: 'vod_play_url',
      comment: "播放地址",
    },
    vodPlot: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: true,
      field: 'vod_plot',
      comment: "是否包含分集剧情",
    },
    vodPlotName: {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: true,
      field: 'vod_plot_name',
      comment: "分集剧情名称",
    },
    vodPlotDetail: {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: true,
      field: 'vod_plot_detail',
      comment: "分集剧情详情",
    },
    isDelete: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: true,
      field: 'is_delete',
      defaultValue: "0",
    },
  },
  {
    freezeTableName: true,
    indexes: []
  }
)

export const MacVodModel = MacVod
