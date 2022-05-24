/*
 * @Author: Ming
 * @Date: 2022-05-18 10:22:18
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 21:48:15
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
  size: 3,
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
  content: '我是文字噢',
  left: '',
  top: '',
  height: '',
  width: '',
  size: 16,
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
  height: '500',
  width: '1000',
  zIndex: 2,
}

export const BASE_DRAG_VIDEO: IDragElement = {
  id: '',
  name: '',
  position: 'absolute',
  type: '',
  content: require('@/global/video/default-video.mp4'),
  left: '',
  top: '',
  height: '100',
  width: '100',
  zIndex: 2,
}
