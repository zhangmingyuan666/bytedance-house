/*
 * @Author: Ming
 * @Date: 2022-05-18 18:25:26
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-19 14:28:33
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
        // if (curSelectedId === id) {
        //   return (
        //     <ResizeBox key={id} directions={['right', 'bottom']}>
        //       <RendererSelector config={dragElement}></RendererSelector>
        //     </ResizeBox>
        //   )
        // } else {
        //   return <RendererSelector config={dragElement} key={id}></RendererSelector>
        // }
        return <RendererSelector config={dragElement} key={id}></RendererSelector>
      })}
    </div>
  )
}

export default CanvasRenderer
