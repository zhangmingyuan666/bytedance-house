import { BASE_DRAG_IMG, BASE_DRAG_TEXT, BASE_DRAG_EMPTY } from './default'
import { IDragElement, DragType } from './type'
function switchInitType(type: DragType): IDragElement {
  let nowConfig: IDragElement
  switch (type) {
    case 'text':
      nowConfig = BASE_DRAG_TEXT
      break
    case 'img':
      nowConfig = BASE_DRAG_IMG
      break
    default:
      nowConfig = BASE_DRAG_EMPTY
      break
  }
  return nowConfig
}

export { switchInitType }
