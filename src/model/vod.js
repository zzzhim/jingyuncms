const { DataTypes } = require('sequelize')
const { sequelize } = require('./sequelize')

const MacVod = sequelize.define(
  'vod',
  {
    'vod_id': {
      type: DataTypes.INTEGER({ length: 10, unsigned: true, }),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "视频id"
    },
    'type_id': {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
      defaultValue: 0,
    },
    'type_id_1': {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
      defaultValue: 0,
    },
    'group_id': {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
      defaultValue: 0,
    },
    'vod_name': {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "视频名称"
    },
    'vod_sub': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_en': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_status': {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
    },
    'vod_letter': {
      type: DataTypes.CHAR(1),
      allowNull: false,
    },
    'vod_color': {
      type: DataTypes.STRING(6),
      allowNull: false,
    },
    'vod_tag': {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    'vod_class': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_pic': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_pic_thumb': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_pic_slide': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_pic_screenshot': {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    'vod_actor': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_director': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_writer': {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    'vod_behind': {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    'vod_blurb': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_remarks': {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    'vod_pubdate': {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    'vod_total': {
      type: DataTypes.MEDIUMINT({ length: 8, unsigned: true }),
      allowNull: false,
      comment: "总集数",
    },
    'vod_serial': {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: "连载数",
    },
    'vod_tv': {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    'vod_weekday': {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    'vod_area': {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    'vod_lang': {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    'vod_year': {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    'vod_version': {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    'vod_state': {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    'vod_author': {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    'vod_jumpurl': {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    'vod_tpl': {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    'vod_tpl_play': {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    'vod_tpl_down': {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    'vod_isend': {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
      comment: "是否完结",
    },
    'vod_lock': {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
    },
    'vod_level': {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
    },
    'vod_copyright': {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
    },
    'vod_points': {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
    },
    'vod_points_play': {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
    },
    'vod_points_down': {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
    },
    'vod_hits': {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
    },
    'vod_hits_day': {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
    },
    'vod_hits_week': {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
    },
    'vod_hits_month': {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
    },
    'vod_duration': {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    'vod_up': {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
    },
    'vod_down': {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
    },
    'vod_score': {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: false,
    },
    'vod_score_all': {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
    },
    'vod_score_num': {
      type: DataTypes.MEDIUMINT({ length: 8 }),
      allowNull: false,
    },
    'vod_time': {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
    },
    'vod_time_add': {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
    },
    'vod_time_hits': {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
    },
    'vod_time_make': {
      type: DataTypes.INTEGER({ length: 10 }),
      allowNull: false,
    },
    'vod_trysee': {
      type: DataTypes.SMALLINT({ length: 6 }),
      allowNull: false,
    },
    'vod_douban_id': {
      type: DataTypes.INTEGER({ length: 10, unsigned: true }),
      allowNull: false,
    },
    'vod_douban_score': {
      type: DataTypes.DECIMAL(3, 1),
      allowNull: false,
    },
    'vod_reurl': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_rel_vod': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_rel_art': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_pwd': {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    'vod_pwd_url': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_pwd_play': {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    'vod_pwd_play_url': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_pwd_down': {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    'vod_pwd_down_url': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_content': {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    'vod_play_from': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_play_server': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_play_note': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_play_url': {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: false,
    },
    'vod_down_from': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_down_server': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_down_note': {
      type: DataTypes.STRING,
      allowNull: false,
    },
    'vod_down_url': {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: false,
    },
    'vod_plot': {
      type: DataTypes.TINYINT({ length: 1 }),
      allowNull: false,
    },
    'vod_plot_name': {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: false,
    },
    'vod_plot_detail': {
      type: DataTypes.TEXT({ length: "medium" }),
      allowNull: false,
    },
    'is_delete': {
      type: DataTypes.ENUM("0", "1"),
      allowNull: false,
      defaultValue: "0",
    },
  },
  {
    freezeTableName: true,
    indexes: [
      {
        name: 'type_id',
        fields: ['type_id'],
      },
      {
        name: 'type_id_1',
        fields: ['type_id_1'],
      },
      {
        name: 'vod_level',
        fields: ['vod_level'],
      },
      {
        name: 'vod_hits',
        fields: ['vod_hits'],
      },
      {
        name: 'vod_letter',
        fields: ['vod_letter'],
      },
      {
        name: 'vod_name',
        fields: ['vod_name'],
      },
      {
        name: 'vod_year',
        fields: ['vod_year'],
      },
      {
        name: 'vod_area',
        fields: ['vod_area'],
      },
      {
        name: 'vod_lang',
        fields: ['vod_lang'],
      },
      {
        name: 'vod_tag',
        fields: ['vod_tag'],
      },
      {
        name: 'vod_class',
        fields: ['vod_class'],
      },
      {
        name: 'vod_lock',
        fields: ['vod_lock'],
      },
      {
        name: 'vod_up',
        fields: ['vod_up'],
      },
      {
        name: 'vod_down',
        fields: ['vod_down'],
      },
      {
        name: 'vod_en',
        fields: ['vod_en'],
      },
      {
        name: 'vod_hits_day',
        fields: ['vod_hits_day'],
      },
      {
        name: 'vod_hits_week',
        fields: ['vod_hits_week'],
      },
      {
        name: 'vod_hits_month',
        fields: ['vod_hits_month'],
      },
      {
        name: 'vod_plot',
        fields: ['vod_plot'],
      },
      {
        name: 'vod_points_play',
        fields: ['vod_points_play'],
      },
      {
        name: 'vod_points_down',
        fields: ['vod_points_down'],
      },
      {
        name: 'group_id',
        fields: ['group_id'],
      },
      {
        name: 'vod_time_add',
        fields: ['vod_time_add'],
      },
      {
        name: 'vod_time',
        fields: ['vod_time'],
      },
      {
        name: 'vod_time_make',
        fields: ['vod_time_make'],
      },
      {
        name: 'vod_actor',
        fields: ['vod_actor'],
      },
      {
        name: 'vod_director',
        fields: ['vod_director'],
      },
      {
        name: 'vod_score_all',
        fields: ['vod_score_all'],
      },
      {
        name: 'vod_score_num',
        fields: ['vod_score_num'],
      },
      {
        name: 'vod_total',
        fields: ['vod_total'],
      },
      {
        name: 'vod_score',
        fields: ['vod_score'],
      },
      {
        name: 'vod_version',
        fields: ['vod_version'],
      },
      {
        name: 'vod_state',
        fields: ['vod_state'],
      },
      {
        name: 'vod_isend',
        fields: ['vod_isend'],
      },
    ]
  }
)

MacVod.sync({ // 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
  // force: true, // 将创建表,如果表已经存在,则将其首先删除
  alter: true, // 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
}).then(res => {
  console.log(`vod------创建成功`)
}).catch(err => {
  console.log(`vod------创建失败`)
  console.log(err)
})

module.exports = {
  MacVodModel: MacVod
}

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
