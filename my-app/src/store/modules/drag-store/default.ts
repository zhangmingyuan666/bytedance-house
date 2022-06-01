/*
 * @Author: Ming
 * @Date: 2022-05-18 10:22:18
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-25 22:41:48
 * @Description: 请填写简介
 */
import { IDragElement } from './type'

export const BASE_DRAG_EMPTY: IDragElement = {
  id: '',
  name: '',
  position: 'absolute',
  type: '',
  content: '',
  left: '',
  top: '',
  height: '',
  width: '',
  fontSize: 1,
  zIndex: 2,
  color: '',
}

export const BASE_DRAG_IMG: IDragElement = {
  id: '',
  name: '',
  position: 'absolute',
  type: '',
  content: 'https://v3.cn.vuejs.org/images/sponsors/html_burger.png',
  left: '',
  top: '',
  height: '',
  width: '',
  zIndex: 2,
}

export const BASE_DRAG_TEXT: IDragElement = {
  id: '',
  name: '',
  position: 'absolute',
  type: '',
  content: '我是文字',
  left: '',
  top: '',
  height: '',
  width: '',
  fontSize: 1,
  zIndex: 2,
  color: '#000',
}

export const BASE_DRAG_AUDIO: IDragElement = {
  id: '',
  name: '',
  position: 'absolute',
  type: '',
  content: require('@/global/audio/default-music.mp3'),
  left: '',
  top: '',
  height: '10%',
  width: '30%',
  zIndex: 2,
}

export const BASE_DRAG_VIDEO: IDragElement = {
  id: '',
  name: '',
  position: 'absolute',
  type: '',
  content: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
  left: '',
  top: '',
  height: '20%',
  width: '20%',
  zIndex: 2,
}
