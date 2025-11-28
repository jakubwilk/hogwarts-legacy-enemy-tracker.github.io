export interface IEnemyCategory {
  id: number
  name: string
}

export interface IEnemyEntry {
  id: number
  category: number
  name: string
  image: string
}

export interface IEnemyCategoryResponse {
  data: IEnemyCategory[]
  total: number
}

export interface IEnemyEntryResponse {
  data: IEnemyEntry[]
  total: number
}
