/*
 * @Author: Ming
 * @Date: 2022-05-17 23:37:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-25 09:22:34
 * @Description: 请填写简介
 */
import { DRAG_ELEMENT_SIZE } from '@/global/default/drag/default'
import useDrag from '@/hooks/drag-hooks'
import { Image } from '@arco-design/web-react'
import * as React from 'react'

type AppProps = {
  id?: string
  src?: string
  width?: string
  height?: string
  style?: any
  isSelected?: boolean
}

const DragImage: React.FC<AppProps> = ({
  id = '', // 初始化的时候是没有id的
  src = 'https://v3.cn.vuejs.org/images/sponsors/html_burger.png',
  style,
  isSelected = false,
}) => {
  let MyImageRef = React.useRef<HTMLDivElement>(null)
  const [onDragStart, onDragEnd, onClickChoose] = useDrag(MyImageRef, 'img')

  return (
    <div
      ref={MyImageRef}
      style={{ ...style }}
      className={isSelected ? 'ring-black ring-2' : ''}
      draggable="true"
      onDragEnd={e => onDragEnd(e, id, MyImageRef)}
      onDragStart={e => onDragStart(e, id)}
      onClick={e => onClickChoose(e, id, MyImageRef)}
    >
      <img className="w-full h-full" src={src} alt="I LOVE ELC"></img>
    </div>
  )
}

export default DragImage
