import nodejieba from "nodejieba"
import hanziTools from "hanzi-tools"
import Segment from "segment"

const segment = new Segment()

// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault()

// nodejieba.load({
//   userDict: "./user.uft8" // 自定义字典
// });

/**
 * 
 * @param {string} content 内容
 * 转换同义词
 */ 
export function doSegment(content) {
  return segment.doSegment(content, {
    convertSynonym: true, // 转换同义词
    stripStopword: false, // 去除停止符
    simple: true, // 不返回词性
  })
}

/**
 * 
 * @param {string} content 内容
 * @param {nubmer} num 关键字数量
 * 提取关键词
 */ 
export function extract(content, num = 5) {
  return nodejieba.extract(content, num)
}

// 生成拼音
export function pinyinify(content) {
  return hanziTools.pinyinify(content)
}

// 简体转繁体
export function traditionalize(content) {
  return hanziTools.traditionalize(content)
}