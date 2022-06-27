import fs from "fs"
import path from "path"
import { isPathExists } from "./isPathExists"

export function createPath(filePath) {
  const arr = filePath.split('\\')

  arr.forEach((item, index) => {
    const list = []

    for (let i = 0; i <= index; i++) {
      list.push(arr[i])
    }

    if(!isPathExists(path.join(...list))) {
      fs.mkdirSync(path.join(...list))
    }
  })
}