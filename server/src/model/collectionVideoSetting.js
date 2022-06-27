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
  vodNameSynonymReplace: "1", // 视频名称是否替换同义词
  descSynonymReplace: "1", // 视频详情是否替换同义词
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
  ], // 视频内容更新 1 图片 2 播放地址 3 连载数 4 备注
  coolectionVideoContentUpdateActive: "0", // collectionVideoList 选中值
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
    fs.writeFileSync(collectionVideoSettingPath, JSON.stringify(data), "utf-8")
  } catch (error) {
    logger.error(error)
  }
}

// 获取采集视频配置
export function getCollectionVideoSetting() {
  try {
    return fs.readFileSync(collectionVideoSettingPath, "utf-8")
  } catch (error) {
    logger.error(error)
  }
}
