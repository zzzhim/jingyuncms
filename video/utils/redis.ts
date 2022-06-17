import Redis from "ioredis"

const redis = new Redis({
  keyPrefix: 'jingyuncms_video_key'
})

export { redis }