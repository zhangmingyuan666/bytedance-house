import { IDragElement } from './type'

export const BASE_DRAG_EMPTY: IDragElement = {
  id: '',
  position: 'absolute',
  type: '',
  content: '',
  left: '',
  top: '',
  height: '',
  width: '',
  size: 3,
  zIndex: 2,
  color: '',
}

export const BASE_DRAG_IMG: IDragElement = {
  id: '',
  position: 'absolute',
  type: '',
  content: '',
  left: '',
  top: '',
  height: '',
  width: '',
  zIndex: 2,
}

export const BASE_DRAG_TEXT: IDragElement = {
  id: '',
  position: 'absolute',
  type: '',
  content: '我是文字噢',
  left: '',
  top: '',
  height: '50px',
  width: '100px',
  size: 3,
  zIndex: 2,
  color: 'red',
}
