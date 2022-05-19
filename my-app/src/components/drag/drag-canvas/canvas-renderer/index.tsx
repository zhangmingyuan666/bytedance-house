/*
 * @Author: Ming
 * @Date: 2022-05-18 18:25:26
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-19 18:03:07
 * @Description: 请填写简介
 */
import { IDragElement } from '@/store/modules/drag-store/type'
import * as React from 'react'
import { ResizeBox } from '@arco-design/web-react'
import RendererSelector from './renderer-selector'
type AppProps = {
  dragElementList: IDragElement[]
  curSelectedId?: string
}

const CanvasRenderer: React.FC<AppProps> = ({ dragElementList, curSelectedId }) => {
  React.useEffect(() => {
    console.log(dragElementList)
  }, [dragElementList.length])

  return (
    <div>
      {dragElementList.map((dragElement: IDragElement) => {
        let { id } = dragElement

        return (
          <RendererSelector
            config={dragElement}
            key={id}
            isSelected={curSelectedId === id ? true : false}
          ></RendererSelector>
        )
      })}
    </div>
  )
}

export default CanvasRenderer
