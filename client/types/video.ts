export interface Video extends VideoDetail {
  
}

export interface VideoDetail {
  vodPlayFrom: string[]
  vodPlayUrl: VodPlayUrl[][]
  id: number
  vodId: number
  categoryId: number
  vodName: string
  vodNamePinYin: string
  vodSub: string
  vodWeight: string
  vodEn: string
  vodStatus: number
  vodLetter: string
  vodColor: string
  vodTag: string
  vodClass: string
  vodPic: string
  vodActor: string
  vodDirector: string
  vodWriter: any
  vodBehind: string
  vodBlurb: string
  vodRemarks: string
  vodPubdate: string
  vodTotal: number
  vodSerial: string
  vodTv: string
  vodWeekday: string
  vodArea: string
  vodLang: string
  vodYear: string
  vodVersion: string
  vodState: string
  vodAuthor: string
  vodIsend: number
  vodLock: number
  vodLevel: number
  vodCopyright: number
  vodPoints: number
  vodHits: number
  vodHitsDay: number
  vodHitsWeek: number
  vodHitsMonth: number
  vodDuration: string
  vodUp: number
  vodDown: number
  vodScore: string
  vodScoreAll: number
  vodScoreNum: number
  vodTimeHits: string
  vodTimeMake: string
  vodTrysee: number
  vodDoubanId: number
  vodDoubanScore: string
  vodRelArt: string
  vodContent: string
  vodPlayNote: string
  isDelete: string
  createdAt: string
  updatedAt: string
}

export interface VodPlayUrl {
  label: string
  value: string
}
