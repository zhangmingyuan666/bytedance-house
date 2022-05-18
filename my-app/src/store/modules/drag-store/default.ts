/*
 * @Author: Ming
 * @Date: 2022-05-18 10:22:18
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 20:06:47
 * @Description: 请填写简介
 */
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
  content: 'https://v3.cn.vuejs.org/images/sponsors/html_burger.png',
  left: '',
  top: '',
  height: '50px',
  width: '200px',
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
  width: '200px',
  size: 3,
  zIndex: 2,
  color: 'red',
}
