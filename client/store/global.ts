import { atom } from "recoil";

interface GlobalStoreState {
  a: number
  b: string
  c: string[]
}

export const globalStore = atom<GlobalStoreState>({
  key: 'global/ceshi',
  default: {
    a: 1,
    b: "22323撒大大",
    c: [ '3', '4', '5' ]
  },
})