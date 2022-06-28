import { logger } from "@sentry/utils"
import fs from "fs"
import path from "path"
import { createPath } from "../utils/createPath"
import { isPathExists } from "../utils/isPathExists"

// 采集视频配置
export const collectionVideoSetting = {
  status: "1", // 审核状态
  createPinYin: "1", // 生成拼音
  createWeight: "1", // 提取内容，生成关键词
  vodNameSynonymReplace: "0", // 视频名称是否替换同义词
  descSynonymReplace: "1", // 视频简介是否替换同义词
  traditionalizeEnable: "0", // 开启传统化 生成繁体字标题，繁体字简介，繁体字关键字
  descDecorateState: "0", // 开启伪原创
  collectionVideoList: [
    {
      label: "名称",
      value: "0",
    },
    {
      label: "分类",
      value: "1",
    },
    {
      label: "年份",
      value: "2",
    },
  ], // 0 名称 1 分类 2年份 多选 0必传
  collectionVideoActive: "0,1", // collectionVideoList 选中值 逗号分隔
  coolectionVideoContentUpdateList: [
    {
      label: "图片",
      value: "1",
    },
    {
      label: "播放地址",
      value: "2",
    },
    {
      label: "连载数",
      value: "3",
    },
    {
      label: "备注",
      value: "4",
    },
    {
      label: "详细介绍",
      value: "5",
    },
    {
      label: "简介",
      value: "6",
    },
  ], // 视频内容更新
  coolectionVideoContentUpdateActive: "1", // collectionVideoList 选中值
  contentFilter: "黄片,av,", // 内容过滤 逗号分隔
}

const collectionVideoSettingPath = path.join(process.cwd(), 'json', 'collectionVideoSetting.json')

if(!isPathExists(collectionVideoSettingPath)) {
  createPath(path.join(process.cwd(), 'json'))

  fs.writeFileSync(collectionVideoSettingPath, JSON.stringify(collectionVideoSetting), "utf-8")
}

// 设置采集视频配置
export function setCollectionVideoSetting(data) {
  try {
    const content = getCollectionVideoSetting()

    fs.writeFileSync(collectionVideoSettingPath, JSON.stringify({
      ...content,
      ...data,
    }), "utf-8")
  } catch (error) {
    logger.error(error)
  }
}

// 获取采集视频配置
export function getCollectionVideoSetting() {
  try {
    return JSON.parse(fs.readFileSync(collectionVideoSettingPath, "utf-8"))
  } catch (error) {
    logger.error(error)
  }
}
