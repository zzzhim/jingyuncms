import jwt from "jsonwebtoken"
import { SECRET_KEY } from "../config"

/**
 * 
 * @param {any} data
 * 创建token
 */
export function createToken(data) {
  return jwt.sign(data, SECRET_KEY, { expiresIn: (24 * 31) + 'h' })
}


/**
 * 
 * @param {any} token
 * 检验token
 */
export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY)
}