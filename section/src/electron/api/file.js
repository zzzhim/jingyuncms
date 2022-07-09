import fs from "fs"
import FormData from "form-data"
import request from '../utils/request'

export function uploadM3u8File(params) {
  const file = fs.createReadStream(params.filePath)
  const form = new FormData()
  form.append('file', file)

  return request({
    url: '/file/upload/m3u8',
    method: 'post',
    data: form,
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
}
