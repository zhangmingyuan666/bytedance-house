/*
 * @Author: Ming
 * @Date: 2022-05-18 10:23:00
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 19:52:52
 * @Description: 请填写简介
 */
interface IDragElement {
  id: string // 唯一标识符
  type: DragType //用于表示种类
  position: 'absolute' // 绝对定位：每一个拖拽系节点都是
  left: string | number
  top: string | number
  height: string
  width: string
  content: string //图片的url，文字的txt，其实就是资源的位置2
  zIndex: number // 这个用于设置文字层级
  size?: number //这个用于设置文字的尺寸 h1 h2 h3
  color?: string // 一些基础的CSS了
}

interface IPosition {
  x: number
  y: number
}

// 标识种类
type DragType = '' | 'text' | 'img' | 'video' | 'housesource' | 'audio'

export type { IDragElement, IPosition, DragType }
