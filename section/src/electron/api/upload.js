import fs from "fs"
import FormData from "form-data"
import axios from "axios"
import request from '../utils/request'

export function uploadConfigImgList(data) {
  return request({
    url: '/upload/config/img/list',
    method: 'get',
    params: data
  })
}

export async function uploadImg(filePath, config) {
  let form

  if(config.paramType === "base64") { // base64形式上传
    const file = fs.readFileSync(filePath, "base64")

    form = {}

    form[config.formData.fileParamName] = "data:image/jpeg;base64," + file

    // 附加参数
    if(config.formData.addParam.length > 0) {
      config.formData.addParam.forEach(item => {
        form[item[0]] = item[1]
      })
    }
  }else { // FormData形式上传
    const file = fs.createReadStream(filePath)
    // const file = fs.readFileSync(filePath, "binary")

    // paramType
    form = new FormData()
    form.append(config.formData.fileParamName, file)

    // 附加参数
    if(config.formData.addParam.length > 0) {
      config.formData.addParam.forEach(item => {
        form.append(item[0], item[1])
      })
    }
  }

  const res = await axios.post(
    config.url,
    form,
    {
      headers: config.headers,
      timeout: 60 * 1000
    }
  )
  
  let result = res.data

  console.log(result)

  if(result) {
    const list = config.result.split('.')

    for (let index = 0; index < list.length; index++) {
      result = result[list[index]]
    }

    return {
      code: 200,
      data: {
        url: (config.baseUrl || '') + result
      }
    }
  }

  return {
    code: 500,
    data: {}
  }
}