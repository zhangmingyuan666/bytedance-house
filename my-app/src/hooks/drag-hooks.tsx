/*
 * @Author: Ming
 * @Date: 2022-05-18 12:17:17
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 23:41:15
 * @Description: 这里是drag专用的hooks
 */
import * as React from 'react'
import { DragType } from '@/store/modules/drag-store/type'
import { useStores } from '@/store'
import { transformPositionPercentToPx, transformPositionPxToPercent } from '@/utils/common'
import { Message } from '@arco-design/web-react'
import { BORDER_SIZE, DRAG_ELEMENT_SIZE } from '@/global/default/drag/default'
import { isOffside } from '@/utils/drag-utils'
import { switchInitType } from '@/store/modules/drag-store/utils'

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
  const { containerRefSize } = dragStore

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
  function getDragPositionAndSize(e: React.DragEvent, Ref: any, id?: string) {
    let dragElementHeight
    let dragElementWidth
    if (id) {
      // 如果这个节点已经被创建了
      console.log('has')
      console.log(Ref.current.offsetWidth, Ref.current.offsetHeight)
      dragElementHeight = Ref.current.offsetHeight
      dragElementWidth = Ref.current.offsetWidth
    } else {
      console.log('not has')
      // 如果这个节点还没有被创建
      // 配置初始化
      let nowConfig = switchInitType(type)

      const { width, height } = nowConfig
      // 如果配置文件中没有width和height：那么就使用计算出来的, 如果有，那么就直接赋值
      dragElementWidth = width
        ? transformPositionPercentToPx(containerRefSize.x, width)
        : Ref.current.offsetWidth
      dragElementHeight = height
        ? transformPositionPercentToPx(containerRefSize.y, height)
        : Ref.current.offsetHeight
    }
    console.log(dragElementWidth, dragElementHeight)
    // let nowConfig = switchInitType(type)
    // console.log('---------------')
    // console.log(nowConfig.width, nowConfig.height)
    // const { width, height } = nowConfig
    // console.log(Ref.current.offsetWidth, Ref.current.offsetHeight)
    // let dragElementWidth = !width
    //   ? Ref.current.offsetWidth
    //   : transformPositionPercentToPx(containerRefSize.x, width)
    // let dragElementHeight = !height
    //   ? Ref.current.offsetHeight
    //   : transformPositionPercentToPx(containerRefSize.y, height)
    //当前点击相对于左上角0,0的位置
    const { x: clickX, y: clickY } = clickPosition
    // console.log('-------------')
    // console.log(dragElementWidth, dragElementHeight)

    //当前放下的位置
    const { clientX, clientY } = e
    //当前canvas的位置
    const { x: containerPositionX, y: containerPositionY } = getCanvasContainerPosition()
    //最终位置
    let finalX = clientX - containerPositionX - clickX // px
    let finalY = clientY - containerPositionY - clickY // px

    console.log('finalX：', finalX)
    console.log('finalY：', finalY)
    console.log('beDragedElePositionX:', dragElementWidth)
    console.log('beDragedElePositionY:', dragElementHeight)
    return { dragElementWidth, dragElementHeight, finalX, finalY }
  }

  // 这是放下组件的时候
  const onDragEnd = (e: React.DragEvent, id?: string, Ref?: any) => {
    if (!id) {
      dragStore.initDragElementConfig()
    }

    const { dragElementWidth, dragElementHeight, finalX, finalY } = getDragPositionAndSize(
      e,
      Ref,
      id
    )

    if (isOffside(finalX, finalY, dragElementWidth, dragElementHeight, containerRefSize)) {
      Message.info('GG!')
      return
    }
    if (id) {
      dragStore.removeExactDragElement(id)
      //把这个组件移除掉，并更换成下面定义的新的
      dragStore.dragDownExistElement(finalX, finalY)
    } else {
      // 第一次放置的时候，我们需要根据size设置他的默认
      let width = transformPositionPxToPercent(containerRefSize.x, dragElementWidth)
      let height = transformPositionPxToPercent(containerRefSize.y, dragElementHeight)
      dragStore.dragDownElement(finalX, finalY, type, { width, height })
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
