/**
 * 
 * 判断路径是否存在
 */
export const isPathExists = (pathStr) => {
  const fs = require("fs")
  return fs.existsSync(pathStr)
}