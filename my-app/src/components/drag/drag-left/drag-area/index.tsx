/*
 * @Author: Ming
 * @Date: 2022-05-17 15:47:58
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 21:06:39
 * @Description: 请填写简介
 */
import * as React from 'react'
import MingCard from '@/base-ui/card'
import beDragComponents from '../../be-dragged-element' // 导入的允许拖动的列表
import { DRAG_ELEMENT_SIZE } from '@/global/default/drag/default'

const DragArea: React.FC = () => {
  return (
    <div>
      <MingCard title="拖拽area">
        {beDragComponents.map(item => {
          const { title, component: Component } = item
          return (
            <div key={title} className="flex mb-4 p-4 ming-border h-full">
              <div className="flex-1 flex-center text-blue-500 hover-filter">{title}</div>
              <div
                className="ming-border flex-center bg-gray-100 p-2 ml-4 w-full h-full"
                style={{ width: DRAG_ELEMENT_SIZE.x, height: DRAG_ELEMENT_SIZE.y }}
              >
                <Component />
              </div>
            </div>
          )
        })}
      </MingCard>
    </div>
  )
}

export default DragArea
