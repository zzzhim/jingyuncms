import fs from "fs"

/**
 * 
 * 判断路径是否存在
 */
export const isPathExists = (pathStr) => {
  return fs.existsSync(pathStr)
}