/*
 * @Author: Ming
 * @Date: 2022-05-17 15:37:07
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-03 18:14:02
 * @Description: 请填写简介
 */
import * as React from 'react'
import { observer } from 'mobx-react-lite'
import './index.css'
import { useStores } from '@/store'
import CanvasRenderer from './canvas-renderer'
import { BORDER_SIZE } from '@/global/default/drag/default'
import { ResizeBox, Statistic } from '@arco-design/web-react'
import HouseSourceChooser from './house-choose'
const DragCanvas: React.FC = () => {
  const { dragStore } = useStores()
  const { getContainerProportion, containerRefSize } = dragStore

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
      <div className="grid grid-cols-3 divide-x divide-grey-100 text-center mb-4">
        <Statistic title="画布长宽比" value={getContainerProportion} groupSeparator />
        <Statistic extra="画布长度" value={containerRefSize.x} groupSeparator precision={2} />
        <Statistic extra="画布高度" value={containerRefSize.y} groupSeparator />
      </div>
      <ResizeBox
        className="border-2 border-gray-100 relative"
        directions={['bottom']}
        style={{
          height: containerRefSize.y,
          width: containerRefSize.x,
          minWidth: 500,
          maxWidth: 500,
          maxHeight: 900,
          minHeight: 500,
        }}
        onMoving={(e, { width, height }) => {
          if (height >= 500 && height <= 900) {
            dragStore.setContainerRefSize(+height.toFixed(2))
          }
        }}
        ref={canvasRef}
      >
        <CanvasRenderer dragElementList={dragElementList} curSelectedId={curSelectedId} />
      </ResizeBox>
      <HouseSourceChooser />
    </div>
  )
}

export default observer(DragCanvas)
