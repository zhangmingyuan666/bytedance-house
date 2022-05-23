/*
 * @Author: Ming
 * @Date: 2022-05-17 15:37:07
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-23 15:41:18
 * @Description: 请填写简介
 */
import * as React from 'react'
import { observer } from 'mobx-react-lite'
import './index.css'
import { useStores } from '@/store'
import CanvasRenderer from './canvas-renderer'
const DragCanvas: React.FC = () => {
  const store = useStores()
  const canvasRef = React.useRef<HTMLDivElement | null>(null)
  const dragElementList = [...store.dragStore.resultDragList]
  const { id: curSelectedId } = store.dragStore.currentDragEle
  // 在canvas节点挂载之后，将这个函数传到mobx中
  const getPosition = () => {
    const { offsetLeft: x, offsetTop: y } = canvasRef.current!
    store.dragStore.setContainerPosition({ x, y })
    //console.log(x, y)
  }
  store.dragStore.setContainerRefFn(getPosition)
  React.useEffect(() => {
    getPosition()
  }, [store.dragStore.resultDragList.length])

  // 通过渲染器进行渲染
  return (
    <div
      className="drag-canvas mx-4 border-2 border-gray-100 relative"
      onDragOver={e => e.preventDefault()}
      ref={canvasRef}
    >
      <CanvasRenderer dragElementList={dragElementList} curSelectedId={curSelectedId} />
    </div>
  )
}

export default observer(DragCanvas)
