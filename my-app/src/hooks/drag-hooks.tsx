/*
 * @Author: Ming
 * @Date: 2022-05-18 12:17:17
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 22:30:43
 * @Description: 这里是drag专用的hooks
 */
import * as React from 'react'
import { DragType } from '@/store/modules/drag-store/type'
import { useStores } from '@/store'

/**
 * @description:
 * @param curRef : 用于接收传送过来的拖动组件
 * @param type : 用于接收传送过来的组件类型
 * @return {*}
 */

const useDrag = (curRef: React.RefObject<HTMLDivElement>, type: DragType) => {
  const store = useStores()
  const { dragStore } = store
  const [clickPosition, setClickPosition] = React.useState({
    x: 0,
    y: 0,
  })

  // 这是捡起组件的时候
  const onDragStart = (e: React.DragEvent, id?: string) => {
    //当前组件相对于父组件的位置
    const { offsetTop: containerTop, offsetLeft: containerLeft } = curRef.current!
    console.log(curRef.current)
    console.log(containerLeft)
    console.log(containerTop)
    //指针的位置
    let { clientX, clientY } = e

    //如果id不存在的情况下
    let x = clientX - containerLeft
    let y = clientY - containerTop
    console.log(x)
    console.log(y)
    if (id) {
      //如果id不存在，就说明是从起始位置开始拖动的
      //指针位置减去盒子距离边界的距离即可
      const { x: containerPositionX, y: containerPositionY } = getCanvasContainerPosition()
      x = clientX - (containerPositionX + containerLeft)
      y = clientY - (containerPositionY + containerTop)
    }
    //如果id存在，这就说明是已经在canvas中的组件了
    setClickPosition(() => ({
      x,
      y,
    }))
  }

  // 这是放下组件的时候
  const onDragEnd = (e: React.DragEvent, id?: string) => {
    //当前点击相对于左上角0,0的位置
    const { x: clickX, y: clickY } = clickPosition

    //当前放下的位置
    const { clientX, clientY } = e
    //当前canvas的位置
    const { x: containerPositionX, y: containerPositionY } = getCanvasContainerPosition()

    //最终位置
    let finalX = clientX - containerPositionX - clickX
    let finalY = clientY - containerPositionY - clickY

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
  const onClickChoose = (e: React.MouseEvent, id?: string) => {
    if (id) {
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
