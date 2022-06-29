const Store = require('electron-store')

const store = new Store()

export function getStore(key, value) {
  return store.get(key)
}

export function setStore(key, value) {
  store.set(key, value)
}

export function delStore(key, value) {
  store.delete(key)
}