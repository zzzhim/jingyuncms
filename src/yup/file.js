import * as yup from 'yup'

export const fileUpload = yup.object().shape({
  file: yup.mixed().required('文件不能为空').test('file', '文件太大', (file) => {
    // if (!value.length) return true // 是否必填

    // 不能超过2m
    if(file.size > 2 * 1024 * 1024) {
      return false
    }

    const arr = file.name.split('.')
    const fileType =( arr.length >= 2 ? `.${arr[arr.length - 1]}` : '').toLocaleLowerCase()
    
    // 文件类型
    if(fileType !== '.m3u8') {
      return false
    }

    return true
  })
})
