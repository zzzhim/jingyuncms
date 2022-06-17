
export const handleHlsVideo = (xhr: any, callbacks: (arr: Uint8Array) => void) => {
  const base64_img = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAANSURBVBhXY/j///9/AAn7A/0FQ0XKAAAAAElFTkSuQmCCR0AREABC8CUAAcEAAP8B/wAB/IAUSBIBBkZGbXBlZwlTZXJ2aWNlMDF3fEPK//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9HQAAQAACwDQABwQAAAAHwACqxBLL//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0dQABAAArAdAAHBAADhAPAAG+EA8AAP4QHwBgoEdW5kAAh96Hf/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////R0EAMAdQ"

  function blobToBase64(blob: Blob, callback: (str: string) => void) {
    var fileReader = new FileReader()
    fileReader.onload = (e: any) => {
      callback(e.target.result)
    }
    // readAsDataURL
    fileReader.readAsDataURL(blob)
    fileReader.onerror = () => {
      callback('blobToBase64 error')
    }
  }

  function str2ab(base64String: string) {
    var base64 = base64String

    var rawData = window.atob(base64)
    var outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }

  blobToBase64(new Blob([xhr.response]), function (res) {
    var str = res.split(base64_img).length >= 2 ? res.split(base64_img)[1] : res.split(base64_img)[0]

    callbacks(str2ab(str))
  })
}