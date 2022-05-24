/*
 * @Author: Ming
 * @Date: 2022-05-18 18:25:26
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 16:14:06
 * @Description: 请填写简介
 */
import { IDragElement } from '@/store/modules/drag-store/type'
import * as React from 'react'
import RendererSelector from './renderer-selector'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/store'
import { mapToArray } from '@/utils/common'
type AppProps = {
  dragElementList: IDragElement[]
  curSelectedId?: string
}

const CanvasRenderer: React.FC<AppProps> = ({ dragElementList, curSelectedId }) => {
  const { dragStore } = useStores()
  React.useEffect(() => {
    console.log(dragElementList)
  }, [dragElementList.length])

  const leftArr = mapToArray(dragStore.leftMap)
  const topArr = mapToArray(dragStore.topMap)
  return (
    <div onDragOver={e => e.preventDefault()}>
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
      {leftArr.map((left: any) => {
        return (
          <div
            className="h-full absolute "
            style={{ left: left + '%', borderLeft: '1px solid rgb(235,235,235)' }}
            key={left}
          ></div>
        )
      })}
      {topArr.map((top: any) => {
        return (
          <div
            className="w-full absolute "
            style={{ top: top + '%', borderTop: '1px solid rgb(235,235,235)' }}
            key={top}
          ></div>
        )
      })}
    </div>
  )
}

export default observer(CanvasRenderer)
