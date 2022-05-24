/*
 * @Author: Ming
 * @Date: 2022-05-17 15:37:07
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 12:59:55
 * @Description: 请填写简介
 */
import * as React from 'react'
import { observer } from 'mobx-react-lite'
import './index.css'
import { useStores } from '@/store'
import CanvasRenderer from './canvas-renderer'
import { BORDER_SIZE } from '@/global/default/drag/default'
import { ResizeBox } from '@arco-design/web-react'
const DragCanvas: React.FC = () => {
  const { dragStore } = useStores()
  const canvasRef = React.useRef<HTMLDivElement | null>(null)
  const dragElementList = [...dragStore.resultDragList]
  const { id: curSelectedId } = dragStore.currentDragEle
  // 在canvas节点挂载之后，将这个函数传到mobx中
  const getPosition = () => {
    const { offsetLeft: x, offsetTop: y } = canvasRef.current!
    dragStore.setContainerPosition({ x, y })
    //console.log(x, y)
  }
  dragStore.setContainerRefFn(getPosition)
  React.useEffect(() => {
    getPosition()
  }, [dragStore.resultDragList.length])

  // 通过渲染器进行渲染
  return (
    <div className="mx-4">
      <div>
        <span>{dragStore.containerRefSize.x}</span>
        <span>{dragStore.containerRefSize.y}</span>
      </div>
      <ResizeBox
        className="border-2 border-gray-100 relative"
        directions={['bottom']}
        style={{
          minWidth: 500,
          maxWidth: 500,
          maxHeight: 900,
          minHeight: 500,
          textAlign: 'center',
        }}
        onMoving={(e, { width, height }) => {
          if (height >= 500 && height <= 900) {
            dragStore.setContainerRefSize(height)
          }
        }}
        ref={canvasRef}
      >
        <div onDragOver={e => e.preventDefault()}>
          <CanvasRenderer dragElementList={dragElementList} curSelectedId={curSelectedId} />
        </div>
      </ResizeBox>
    </div>
  )
}

export default observer(DragCanvas)
