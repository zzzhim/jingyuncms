import * as yup from 'yup'

export const m3u8Upload = yup.object().shape({
  file: yup
          .mixed()
          .required('文件不能为空')
          .test('size', '文件大小不能超过2m', (file) => {
            // 不能超过2m
            if(file.size > 2 * 1024 * 1024) {
              return false
            }

            return true
          })
          .test('originalname', '请上传m3u8文件', (file) => {
            const arr = file.originalname.split('.')
            const fileType =(arr.length >= 2 ? `${arr[arr.length - 1]}` : '').toLocaleLowerCase()
            // 文件类型
            if(fileType !== 'm3u8') {
              return false
            }

            return true
          })
})

export const imgUpload = yup.object().shape({
  file: yup
          .mixed()
          .required('文件不能为空')
          .test('size', '文件大小不能超过5m', (file) => {
            // 不能超过5m
            if(file.size > 5 * 1024 * 1024) {
              return false
            }

            return true
          })
          .test('originalname', '请上传png、jpg、webp类型的图片', (file) => {
            const arr = file.originalname.split('.')
            const fileType =(arr.length >= 2 ? `${arr[arr.length - 1]}` : '').toLocaleLowerCase()
            // 文件类型
            if(fileType !== 'png' && fileType !== 'jpg' && fileType !== 'webp') {
              return false
            }

            return true
          })
})