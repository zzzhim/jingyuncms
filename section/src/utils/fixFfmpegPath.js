import electronIsDev from "electron-is-dev"

export function fixFfmpegPath(path) {
  if(!electronIsDev) {
    return path.replace("app.asar", "app.asar.unpacked")
  }

  return path
}