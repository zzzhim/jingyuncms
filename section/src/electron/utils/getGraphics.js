import systeminformation from "systeminformation"
import { logger } from "./logger"

export const graphics = () => {
  return new Promise((resolve, reject) => {
    try {
      systeminformation.graphics((data) => {
        resolve(data.controllers)
      })
    } catch (error) {
      logger.info(error)
      reject(error)
    }
  })
}


export const IsAMD = (controller) => {
  if(controller.model && controller.model.includes("AMD")) {
    return true
  }

  return false
}