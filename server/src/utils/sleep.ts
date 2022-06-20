// 函数实现，参数单位 毫秒 ；
export function sleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms))
}