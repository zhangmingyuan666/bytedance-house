/*
 * @Author: Ming
 * @Date: 2022-05-18 10:22:24
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-23 20:44:21
 * @Description: 请填写简介
 */
import { ObservableMap } from 'mobx'
import { BASE_DRAG_IMG, BASE_DRAG_TEXT, BASE_DRAG_EMPTY } from './default'
import { IDragElement, DragType } from './type'
export function switchInitType(type: DragType): IDragElement {
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

/**
 * @description:
 * @param {Map} map : 这是哈希表，用于存储左或右
 * @param {*} number
 * @param {number} target : 目标值
 * @param {number} offset ：偏移量
 * @return {*}
 */

// 处理边界
function handleBorder(map: ObservableMap<number, number>, border: number) {
  let value = map.get(border)!
  map.set(border, value + 1)
  return border
}

export function connectNearestMap(
  map: ObservableMap<number, number>,
  target: number,
  offset: number
): number {
  console.log(map)
  for (let i = 0; i < offset; i++) {
    const leftBorder = target - i
    const rightBorder = target + i
    if (map.has(leftBorder)) {
      return handleBorder(map, leftBorder)
    } else if (map.has(rightBorder)) {
      return handleBorder(map, rightBorder)
    }
  }
  // 没找到的话，返回最大值，并把旧的删除
  map.set(target, 1)
  return target
}

export function deleteNearestMap(
  map: ObservableMap<number, number>,
  target: number,
  offset: number
) {
  function toDelete(border: number) {
    const value = map.get(border)!
    if (value === 1) {
      map.delete(border)
    } else {
      map.set(border, value - 1)
    }
  }
  for (let i = 0; i < offset; i++) {
    const leftBorder = target - i
    const rightBorder = target + i

    if (map.has(leftBorder)) {
      return toDelete(leftBorder)
    } else if (map.has(rightBorder)) {
      return toDelete(rightBorder)
    }
  }
}
