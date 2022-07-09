import axios from 'axios'
import { getToken } from './auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://frp.lovewyf.xyz:7600/api/cms', // url = base url + request url
  // baseURL: 'https://www.yunnetflix.com/api/cms', // url = base url + request url
  timeout: 15000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers.token = getToken() || ""

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

export default service
