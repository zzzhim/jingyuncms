import getConfig from 'next/config'

export const { NODE_ENV_API }: { NODE_ENV_API: "dev" | "test" | "prep" | "prod" } = getConfig().publicRuntimeConfig
export const { isServer } = getConfig().serverRuntimeConfig

export const ASSETS_BASE_URL: string = (() => {
  let ASSETS_BASE_URL = ""
  switch (NODE_ENV_API) {
    case "dev":
      ASSETS_BASE_URL = ""
      break
    case "test":
      ASSETS_BASE_URL = ""
      break
    case "prep":
      ASSETS_BASE_URL = ""
      break
    case "prod":
      ASSETS_BASE_URL = ""
      break
  }

  return ASSETS_BASE_URL
})()

export const BASE_URL: string = (() => {
  let BASE_URL = "http://frp.lovewyf.xyz:7600/api/web"

  switch (NODE_ENV_API) {
    case "dev":
      BASE_URL = "http://frp.lovewyf.xyz:7600/api/web"
      break
    case "test":
      BASE_URL = ""
      break
    case "prep":
      BASE_URL = ""
      break
    case "prod":
      BASE_URL = ""
      break
  }

  return BASE_URL
})()
