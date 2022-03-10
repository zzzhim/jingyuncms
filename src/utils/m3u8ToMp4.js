
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg'
import fluentFfmpeg from 'fluent-ffmpeg'
import logger from './logger'
const ffmpeg = fluentFfmpeg().setFfmpegPath(ffmpegInstaller.path)

function m3u8ToMp4Converter() {
  const fileName = base_url + `/m3u8/${dayjs().year()}_${dayjs().month()}_${dayjs().date()}_${new Date().getTime()}.mp4`

  return new Promise((resolve, reject) => {
    ffmpeg
      .addInput(fileUrl)
      .on("error", error => {
        reject(new Error(error));
      })
      .on('progress', function(progress) {
        logger.info('下载进度: 已完成 ' + progress.percent + '%。');
      })
      .on("end", () => {
        logger.debug('下载进度: 已完成 100%。\n');
        logger.info('=========================');
        resolve(fileName)
      })
      .outputOptions("-c copy")
      .outputOptions("-bsf:a aac_adtstoasc")
      .output(fileName)
      .run()
  })
}

export { m3u8ToMp4Converter }