import Redis from "ioredis"
import { categoryVideoList } from '../controllers/web/category'

const redis = new Redis({
  keyPrefix: 'jingyuncms_cms_key'
})

export { redis }


export async function initRedis() {
  setCategoryVideoList()
}

// 设置 redis 分类列表
export async function setCategoryVideoList() {
  const result = await categoryVideoList()

  if(result.code === 200) {
    await redis.set("categoryVideoList", JSON.stringify(result.data), "EX", 60 * 60 * 24 * 365 * 3)
  }else {
    await redis.set("categoryVideoList", JSON.stringify([]), "EX", 60 * 60 * 24 * 365 * 3)
  }
}

// 获取 redis 分类列表
export async function getCategoryVideoList() {
  return await redis.get("categoryVideoList")
}