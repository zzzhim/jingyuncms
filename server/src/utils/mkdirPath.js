import path from 'path'
import fs from 'fs'
import { isPathExists } from './isPathExists';

export const mkdirPath = (pathStr) => {
  var projectPath = path.join(process.cwd())
  var tempDirArray = pathStr.split('/')

  for (var i = 0; i < tempDirArray.length; i++) {
    projectPath = projectPath + '/' + tempDirArray[i]
    if (!isPathExists(projectPath)) {
      fs.mkdirSync(projectPath)
    }
  }
  return projectPath
}