/*
 * @Author: Ming
 * @Date: 2022-05-18 12:17:17
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 13:28:27
 * @Description: 这里是 drag 专用的hooks
 */
import * as React from 'react'
import { DragType } from '@/store/modules/drag-store/type'

/**
 * @description:
 * @param curRef : 用于接收传送过来的拖动组件
 * @param type : 用于接收传送过来的组件类型
 * @return {*}
 */
const useDrag = (curRef: HTMLDivElement | null, type: DragType) => {
  return [] as const
}

export default useDrag
