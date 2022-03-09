import puppeteer from "puppeteer"
import response from "../utils/response"

const getDocumentData = () => {
  console.log(document)
  const _dom = document.querySelector('#content')

  const videoName = () => {
    const str = _dom.querySelector('h1 span[property="v:itemreviewed"]')

    return str ? str.innerText.trim() : ''
  }

  const year = () => {
    const str = _dom.querySelector('h1 span.year')

    return str ? str.innerText.trim() : ''
  }

  const imgUrl = () => {
    const str = _dom.querySelector('#mainpic img[rel="v:image"]')

    return str ? str.src : ''
  }

  const daoyan = () => {
    const str = _dom.querySelector('#info > span:nth-of-type(1) .attrs')

    return str ? str.innerText.trim() : ''
  }

  const bianju = () => {
    const str = _dom.querySelector('#info > span:nth-of-type(2) .attrs')

    return str ? str.innerText.trim() : ''
  }

  const zhuyan = () => {
    let str = _dom.querySelectorAll('#info > span:nth-of-type(3) .attrs span a') || []

    if(str.length) {
      str = Array.prototype.slice.call(str).map(item => item.innerText).join(",")
    }

    // return str ? str.innerText.trim() : ''
    return str.trim()
  }

  // 类型
  const type = () => {
    let str = _dom.querySelectorAll('span[property="v:genre"]') || []

    if(str.length) {
      str = Array.prototype.slice.call(str).map(item => item.innerText).join(",")
    }

    return str.trim()
  }

  // 地区
  const diqu = () => {
    const str = _dom.querySelector("#info").innerText

    return str.substring(str.indexOf('制片国家/地区:') + 8, str.indexOf('语言:')).trim()
  }

  // 语言
  const yuyan = () => {
    const str = _dom.querySelector("#info").innerText

    return str.substring(str.indexOf('语言:') + 3, str.indexOf('上映日期:')).trim()
  }

  // 上映时间
  const time = () => {
    let str = _dom.querySelector('span[property="v:initialReleaseDate"]')

    return str.innerText.trim()
  }

  // 片长
  const pianchang = () => {
    let str = _dom.querySelector('span[property="v:runtime"]')

    return str.innerText.trim()
  }
  
  // 别名
  const bieming = () => {
    const str = _dom.querySelector("#info").innerText

    return str.substring(str.indexOf('又名:') + 3, str.indexOf('IMDb')).trim()
  }

  // 评分
  const pingfen = () => {
    const str = _dom.querySelector('[property="v:average"]') || ""

    return str.innerText.trim()
  }

  const desc = () => {
    const str = _dom.querySelector('#link-report')

    return str ? str.innerText.trim() : ''
  }

  return {
    videoName: videoName(),
    year: year(),
    imgUrl: imgUrl(),
    daoyan: daoyan(),
    bianju: bianju(),
    zhuyan: zhuyan(),
    type: type(),
    diqu: diqu(),
    yuyan: yuyan(),
    time: time(),
    pianchang: pianchang(),
    bieming: bieming(),
    pingfen: pingfen(),
    desc: desc(),
  }
}

/**
 * 
 * @description 获取豆瓣视频数据
 */
export const getDoubanVideoData = ({ doubanId }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(`https://movie.douban.com/subject/${doubanId}/`);
      await page.setViewport({ width: 1920, height: 1080 });
      const data = await page.evaluate(getDocumentData)

      resolve(response.success(200, data))
      await browser.close();
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}
