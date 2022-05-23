/*
 * @Author: Ming
 * @Date: 2022-05-18 12:17:17
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-23 17:42:12
 * @Description: 这里是drag专用的hooks
 */
import * as React from 'react'
import { DragType } from '@/store/modules/drag-store/type'
import { useStores } from '@/store'
import { transformPositionPercentToPx } from '@/utils/common'
import { Message } from '@arco-design/web-react'
import { BORDER_SIZE, DRAG_ELEMENT_SIZE } from '@/global/default/drag/default'
import { isOffside } from '@/utils/drag-utils'

// 此处的target是尺寸
const transformPosition = (target: string) => {
  return transformPositionPercentToPx(500, target)
}

/**
 * @description:
 * @param curRef : 用于接收传送过来的拖动组件
 * @param type : 用于接收传送过来的组件类型
 * @return {*}
 */

const useDrag = (curRef: React.RefObject<HTMLDivElement>, type: DragType) => {
  const store = useStores()

  const { dragStore } = store

  // 用于标记点击的时候相对于父亲节点的坐标
  const [clickPosition, setClickPosition] = React.useState({
    x: 0,
    y: 0,
  })

  //const offsideStatus = React.useRef(false)

  // 这是捡起组件的时候
  const onDragStart = (e: React.DragEvent, id?: string) => {
    //当前组件相对于页面的的位置
    const { offsetTop: containerTop, offsetLeft: containerLeft } = curRef.current!
    //指针的位置
    let { clientX, clientY } = e

    //如果id不存在的情况下
    let x = clientX - containerLeft
    let y = clientY - containerTop

    if (id) {
      //如果id存在，这就说明是已经在canvas中的组件了
      const { x: containerPositionX, y: containerPositionY } = getCanvasContainerPosition()
      x = clientX - (containerPositionX + containerLeft)
      y = clientY - (containerPositionY + containerTop)
      //如果id不存在，就说明是从起始位置开始拖动的
      //指针位置减去盒子距离边界的距离即可
    }
    setClickPosition(() => ({
      x,
      y,
    }))
  }
  function getDragPositionAndSize(e: React.DragEvent) {
    const { width, height } = dragStore.currentDragEle
    let dragElementWidth =
      transformPosition(width) === 0 ? DRAG_ELEMENT_SIZE.x : transformPosition(width)
    let dragElementHeight =
      transformPosition(height) === 0 ? DRAG_ELEMENT_SIZE.y : transformPosition(height)
    //当前点击相对于左上角0,0的位置
    const { x: clickX, y: clickY } = clickPosition

    //当前放下的位置
    const { clientX, clientY } = e
    //当前canvas的位置
    const { x: containerPositionX, y: containerPositionY } = getCanvasContainerPosition()

    //最终位置
    let finalX = clientX - containerPositionX - clickX // px
    let finalY = clientY - containerPositionY - clickY // px
    return { dragElementWidth, dragElementHeight, finalX, finalY }
  }

  // const onDrag = (e: React.DragEvent, id?: string) => {
  //   const { dragElementWidth, dragElementHeight, finalX, finalY } = getDRagPositionAndSize(e)
  //   console.log('---------')
  //   console.log(finalX, finalY)
  //   if (isOffside(finalX, finalY, dragElementWidth, dragElementHeight, BORDER_SIZE)) {
  //     offsideStatus.current = true
  //   } else {
  //     offsideStatus.current = false
  //   }
  // }
  // 这是放下组件的时候
  const onDragEnd = (e: React.DragEvent, id?: string) => {
    if (!id) {
      dragStore.initDragElementConfig()
    }
    const { dragElementWidth, dragElementHeight, finalX, finalY } = getDragPositionAndSize(e)

    // console.log('finalX：', finalX)
    // console.log('finalY：', finalY)
    // console.log('beDragedElePositionX:', transformPosition(width))
    // console.log('beDragedElePositionY:', transformPosition(height))
    if (isOffside(finalX, finalY, dragElementWidth, dragElementHeight, BORDER_SIZE)) {
      Message.info('GG!')
      return
    }
    if (id) {
      dragStore.removeExactDragElement(id)
      //把这个组件移除掉，并更换成下面定义的新的
      dragStore.dragDownExistElement(finalX, finalY)
    } else {
      dragStore.dragDownElement(finalX, finalY, type)
    }
  }

  // 点击某一组件，获取这个组建的实例
  // 如果没有id，那么就不处理，有的话获取详情
  const onClickChoose = (e: React.MouseEvent, id?: string, MyImageRef?: any) => {
    if (id) {
      //console.log(MyImageRef)
      dragStore.getExactDragElement(id)
    } else {
      console.warn('该节点还没被创建')
    }
  }

  //获取当前canvas的位置
  const getCanvasContainerPosition = () => {
    dragStore.containerRefFn() //这是canvas的位置
    //当前canvas的位置
    const { x, y } = dragStore.containerPosition
    return {
      x,
      y,
    }
  }

  return [onDragStart, onDragEnd, onClickChoose] as const
}

export default useDrag
