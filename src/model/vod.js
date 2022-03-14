import { DataTypes } from "sequelize"
import { sequelize } from "./sequelize"

const MacVod = sequelize.define(
  'vod',
  {
    vodId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'vod_id',
      comment: "视频id"
    },
    typeId: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
      defaultValue: 0,
      field: 'type_id',
      comment: "分类id",
    },
    // 'type_id_1: {
    //   type: DataTypes.SMALLINT({ length: 6 }),
    //   allowNull: false,
    //   defaultValue: 0,
    //   comment: "一级分类id",
    // },
    // 'group_id: {
    //   type: DataTypes.SMALLINT({ length: 6 }),
    //   allowNull: false,
    //   defaultValue: 0,
    //   comment: "用户组id",
    // },
    vodName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_name',
      comment: "视频名称"
    },
    vodSub: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_sub',
      comment: "副标题",
    },
    vodEn: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_en',
      comment: "别名",
    },
    vodStatus: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      field: 'vod_status',
      comment: "状态 0-未审 1-已审",
    },
    vodLetter: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      field: 'vod_letter',
      comment: "首字母",
    },
    vodColor: {
      type: DataTypes.STRING(6),
      allowNull: false,
      field: 'vod_color',
      comment: "颜色",
    },
    vodTag: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'vod_tag',
      comment: "标签",
    },
    vodClass: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_class',
      comment: "扩展分类",
    },
    vodPic: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_pic',
      comment: "图片",
    },
    vodPicThumb: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_pic_thumb',
      comment: "缩略图",
    },
    vodPicSlide: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_pic_slide',
      comment: "幻灯图",
    },
    vodActor: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_actor',
      comment: "主演",
    },
    vodDirector: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_director',
      comment: "导演",
    },
    vodWriter: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'vod_writer',
      comment: "编剧",
    },
    vodBehind: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'vod_behind',
      comment: "幕后",
    },
    vodBlurb: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_blurb',
      comment: "简介",
    },
    vodRemarks: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'vod_remarks',
      comment: "备注",
    },
    vodPubdate: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'vod_pubdate',
      comment: "上映日期",
    },
    vodTotal: {
      type: DataTypes.MEDIUMINT({ length: 8, unsigned: true }),
      allowNull: false,
      field: 'vod_total',
      comment: "总集数",
    },
    vodSerial: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'vod_serial',
      comment: "连载数",
    },
    vodTv: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'vod_tv',
      comment: "上映电视台",
    },
    vodWeekday: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'vod_weekday',
      comment: "节目周期",
    },
    vodArea: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'vod_area',
      comment: "地区",
    },
    vodLang: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'vod_lang',
      comment: "语言",
    },
    vodYear: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'vod_year',
      comment: "年份",
    },
    vodVersion: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'vod_version',
      comment: "版本-dvd,hd,720p",
    },
    vodState: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'vod_state',
      comment: "资源类别-正片,预告片,花絮",
    },
    vodAuthor: {
      type: DataTypes.STRING(60),
      allowNull: false,
      field: 'vod_author',
      comment: "编辑人员",
    },
    vodIsend: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      field: 'vod_isend',
      comment: "是否完结",
    },
    vodLock: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      field: 'vod_lock',
      comment: "是否锁定视频",
    },
    vodLevel: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      field: 'vod_level',
      comment: "推荐级别",
    },
    vodCopyright: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      field: 'vod_copyright',
      comment: "是否开启版权提示",
    },
    vodPoints: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
      field: 'vod_points',
      comment: "访问视频需要积分",
    },
    vodHits: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
      field: 'vod_hits',
      comment: "总点击量",
    },
    vodHitsDay: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
      field: 'vod_hits_day',
      comment: "日点击量",
    },
    vodHitsWeek: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
      field: 'vod_hits_week',
      comment: "周点击量",
    },
    vodHitsMonth: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
      field: 'vod_hits_month',
      comment: "月点击量",
    },
    vodDuration: {
      type: DataTypes.STRING(10),
      allowNull: false,
      field: 'vod_duration',
      comment: "时长",
    },
    vodUp: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
      field: 'vod_up',
      comment: "顶数",
    },
    vodDown: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
      field: 'vod_down',
      comment: "踩数",
    },
    vodScore: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: false,
      field: 'vod_score',
      comment: "平均分",
    },
    vodScoreAll: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
      field: 'vod_score_all',
      comment: "总评分"
    },
    vodScoreNum: {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
      field: 'vod_score_num',
      comment: "评分次数"
    },
    vodTime: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      field: 'vod_time',
      comment: "更新时间",
    },
    vodTimeAdd: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      field: 'vod_time_add',
      comment: "添加时间",
    },
    vodTimeHits: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      field: 'vod_time_hits',
      comment: "点击时间",
    },
    vodTimeMake: {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
      field: 'vod_time_make',
      comment: "生成时间",
    },
    vodTrysee: {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
      field: 'vod_trysee',
      comment: "试看时长分",
    },
    vodDoubanId: {
      type: DataTypes.INTEGER({ length: 10, unsigned: true }),
      allowNull: false,
      field: 'vod_douban_id',
      comment: "豆瓣ID",
    },
    vodDoubanScore: {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: false,
      field: 'vod_douban_score',
      comment: "豆瓣评分",
    },
    vodReurl: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_reurl',
      comment: "来源地址",
    },
    vodRelVod: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_rel_vod',
      comment: "关联视频ids",
    },
    vodRelArt: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_rel_art',
      comment: "关联文章ids",
    },
    vodContent: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'vod_content',
      comment: "详细介绍",
    },
    vodPlayFrom: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_play_from',
      comment: "播放组",
    },
    vodPlayNote: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'vod_play_note',
      comment: "播放备注",
    },
    vodPlayUrl: {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: false,
      field: 'vod_play_url',
      comment: "播放地址",
    },
    vodPlot: {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      field: 'vod_plot',
      comment: "是否包含分集剧情",
    },
    vodPlotName: {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: false,
      field: 'vod_plot_name',
      comment: "分集剧情名称",
    },
    vodPlotDetail: {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: false,
      field: 'vod_plot_detail',
      comment: "分集剧情详情",
    },
    isDelete: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: false,
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

// 参数
// order 排列顺序desc倒序，asc正序
// by 排序依据 id,time,time_add,score,hits,hits_day,hits_week,hits_month,up,down,level,rnd
// start 从第几条开始
// num 获取条数
// ids 指定1,2,3一组ID；
// not 不抱含id 多个逗号链接
// type 指定获取分类数据 all所有；1,2,3指定；
// class 指定某扩展分类 支持多个 动作,喜剧
// tag 指定tag 支持多个 aaa,xxx
// level 指定推荐值 支持多个 1,2
// area 指定地区 支持多个 大陆,香港
// lang 指定语言 支持多个 国语,粤语
// year 指定年代 支持多个 2002,2003
// state 资源类别 支持多个 高清版,剧场版,抢先版
// version 资源版本 支持多个 正片,预告片
// weekday 更新周期 支持多个 一,二,三
// rel 指定关联数据 1,2,3 或 变形金刚
// timeadd 添加时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
// timehits 点击时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
// time 更新时间 一天前 -1 day，一周前-1 week，一月前-1 month，一小时前-1 hour
// hitsmonth 月点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
// hitsweek 周点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
// hitsday日点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
// hits 总点击量 大于一千 gt 1000, 小于一千 lt 1000，区间一千二千之间 between 1000,2000
// paging 是否分页yes
// pageurl 分页地址
// cachetime 自定义缓存时间单位秒
// isend是否连载完毕 0,1
// plot是否包含分集剧情 0,1

// <!-- 视频字段 -->
// {$obj.vod_id} 视频id
// {$obj.type_id} 分类id
// {$obj.type_id_1} 一级分类id
// {$obj.type} 分类对象，二级属性可参考分类属性
// {$obj.type.type_name} 分类名
// {$obj.type.type_en} 分类拼音
// {$obj.type_1} 一级分类对象，二级属性可参考分类属性
// {$obj.type_1.type_name} 一级分类名
// {$obj.type_1.type_en} 一级分类拼音
// {$obj.group_id} 用户组id
// {$obj.vod_name} 视频名
// {$obj.vod_sub} 副标题
// {$obj.vod_en} 别名
// {$obj.vod_status} 状态0未审1已审
// {$obj.vod_letter} 首字母
// {$obj.vod_color} 颜色
// {$obj.vod_tag} tags 
// {$obj.vod_class} 扩展分类
// {$obj.vod_pic} 图片
// {$obj.vod_pic_thumb} 缩略图
// {$obj.vod_pic_slide} 幻灯图
// {$obj.vod_pic_screenshot}截图多个图片用$$$连接
// {$obj.vod_actor} 主演
// {$obj.vod_director} 导演
// {$obj.vod_writer}编剧
// {$obj.vod_behind}幕后
// {$obj.vod_blurb} 简介
// {$obj.vod_remarks} 备注
// {$obj.vod_pubdate}上映日期
// {$obj.vod_total} 总集数
// {$obj.vod_serial} 连载数
// {$obj.vod_tv} 上映电视台
// {$obj.vod_weekday} 节目周期
// {$obj.vod_area} 地区
// {$obj.vod_lang} 语言
// {$obj.vod_year} 年代
// {$obj.vod_version} 版本-dvd,hd,720p
// {$obj.vod_state} 资源类别-正片,预告片,花絮
// {$obj.vod_author} 编辑人员
// {$obj.vod_jumpurl} 跳转url
// {$obj.vod_tpl} 独立模板
// {$obj.vod_tpl_play} 独立播放页模板
// {$obj.vod_tpl_down} 独立下载页模板
// {$obj.vod_isend} 是否完结
// {$obj.vod_lock} 锁定1
// {$obj.vod_level} 推荐级别
// {$obj.vod_points} 访问整个视频所需积分
// {$obj.vod_points_play} 每集点播付费
// {$obj.vod_points_down} 每集下载付费
// {$obj.vod_hits} 总点击量
// {$obj.vod_hits_day} 日点击量
// {$obj.vod_hits_week} 周点击量
// {$obj.vod_hits_month} 月点击量
// {$obj.vod_duration} 时长
// {$obj.vod_up} 顶数
// {$obj.vod_down} 踩数
// {$obj.vod_douban_score} 豆瓣评分
// {$obj.vod_douban_id} 豆瓣ID
// {$obj.vod_score} 平均分
// {$obj.vod_score_all} 总评分
// {$obj.vod_score_num} 评分次数
// {$obj.vod_time} 更新时间
// {$obj.vod_time_add} 添加时间
// {$obj.vod_time_hits} 点击时间
// {$obj.vod_time_make} 生成时间
// {$obj.vod_trysee} 试看时长分
// {$obj.vod_reurl} 来源地址
// {$obj.vod_rel_vod} 关联视频ids
// {$obj.vod_rel_art} 关联文章ids
// {$obj.vod_content} 详细介绍
// {$obj.vod_pwd} 访问内容页密码
// {$obj.vod_pwd_url} 获取密码链接
// {$obj.vod_pwd_play} 访问播放页密码
// {$obj.vod_pwd_play_url} 获取密码链接
// {$obj.vod_pwd_down} 访问下载页密码
// {$obj.vod_pwd_down_url} 获取密码链接
// {$obj.vod_copyright} 是否开启版权提示
// {$obj.vod_play_from} 播放组
// {$obj.vod_play_server} 播放服务器组
// {$obj.vod_play_note} 播放备注
// {$obj.vod_play_url} 播放地址
// {$obj.vod_down_from} 下载租
// {$obj.vod_down_server} 下载服务器组
// {$obj.vod_down_note} 下载备注
// {$obj.vod_down_url} 下载地址
// {$obj.vod_plot} 是否包含分集剧情
// {$obj.vod_plot_name} 分集剧情名称
// {$obj.vod_plot_detail} 分集剧情详情
