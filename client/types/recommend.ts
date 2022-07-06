import { Video } from "./video"

export interface RecommendList {
  configName: string
  styleName: string
  id: number
  sort: number
  configType: string
  styleType: string
  recommendName: string
  recommendIcon: string
  updateAuthorId: number
  updateAuthorName: string
  createTime: string
  updateTime: string
  isDelete: string
  createdAt: string
  updatedAt: string
  children: RecommendListChildren[]
}

export interface RecommendListChildren extends Video {
  id: number
  sort: number
  configId: number
  vodId: number
  categoryId: number
  vodName: string
  imgUrl: string
  vodArea: string
  vodYear: string
  vodRemarks: string
  vodTotal: number
  vodContent: string
  vodActor: string
  updateAuthorId: number
  updateAuthorName: string
  createdAt: string
  updatedAt: string
}
export interface Daum {
  id: number
  sort: number
  parentId: number
  categoryName: string
  status: string
  createdAt: string
  updatedAt: string
}