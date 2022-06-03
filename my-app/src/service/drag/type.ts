import { IDragElement } from '@/store/modules/drag-store/type'

export interface IDragMessagePost {
  json: string
  id?: string
}

export interface IDragMessageJSON {
  author: string
  canvasProportion: string
  date: Date
  name: string
  data: IDragElement[]
}
