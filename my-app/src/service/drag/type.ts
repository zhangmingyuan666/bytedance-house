import { IDragElement } from '@/store/modules/drag-store/type'

export interface IDragMessagePost {
  json: string
  id?: string
}

export interface IDragMessageJSON {
  houseSourceId: string
  author: string
  canvasProportion: string
  date: Date
  name: string
  data: IDragElement[]
}

export interface IDragFormInput {
  author: string
  name: string
}
