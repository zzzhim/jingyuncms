import puppeteer from "puppeteer"
import response from "../utils/response"

class DouBan {
  getDoubanVideoData() {
    return new Promise(async (resolve, reject) => {
      try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://movie.douban.com/subject/35268026/");
        await page.setViewport({ width: 1920, height: 1080 });
        const data = page.evaluate(() => {
          const _dom = document.querySelector('#content')
          const videoName = _dom.querySelector('h1 span[property="v:itemreviewed"]').innerText
          const year = _dom.querySelector('h1 span.year').innerText
          const imgUrl = _dom.querySelector('#mainpic img[rel="v:image"]').src
          const daoyan = _dom.querySelector('#info > span:nth-child(1) .attrs').innerText
          const bianju = _dom.querySelector('#info > span:nth-child(2) .attrs').innerText
          const zhuyan = _dom.querySelector('#info > span:nth-child(3) .attrs').innerText
          const desc = _dom.querySelector('#link-report').innerText
          const type = _dom.querySelectorAll('span[property="v:genre"]')
        })


        await browser.close();
      } catch (error) {
        console.log(error)
        reject(error)
      }
    })
  }

  /**
   * 
   * @param {string} type 1 登录 2 注册 3 修改密码
   * @description 图形验证码
   */
  async getVideoData(ctx, { type }) {

    return response.info(500, {}, '获取验证码失败')
  }
}

module.exports = new DouBan()