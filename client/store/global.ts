import { atom } from "recoil";
import { Daum } from "../types/category";

interface GlobalStoreState {
  categoryList: Daum[]
}

export const globalStore = atom<GlobalStoreState>({
  key: 'global/common',
  default: {
    categoryList: []
  },
})