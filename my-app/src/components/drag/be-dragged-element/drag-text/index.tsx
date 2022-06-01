/*
 * @Author: Ming
 * @Date: 2022-05-17 23:38:21
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-25 22:42:13
 * @Description: text drag element
 */
import * as React from 'react'
import { DRAG_ELEMENT_SIZE } from '@/global/default/drag/default'
import useDrag from '@/hooks/drag-hooks'

type AppProps = {
  id?: string
  content?: string
  fontSize?: number
  width?: string
  height?: string
  style?: any
  isSelected?: boolean
}

const DragText: React.FC<AppProps> = ({
  id = '', // 初始化的时候是没有id的
  content = '我是文字噢',
  fontSize = 1,
  style,
  isSelected = false,
}) => {
  let myTextRef = React.useRef<HTMLDivElement | null>(null)
  const [onDragStart, onDragEnd, onClickChoose] = useDrag(myTextRef, 'text')

  return (
    <div
      ref={myTextRef}
      style={{ ...style, fontSize: fontSize + 'rem' }}
      className={isSelected ? 'ring-black ring-2' : ''}
      draggable="true"
      onDragEnd={e => onDragEnd(e, id, myTextRef)}
      onDragStart={e => onDragStart(e, id)}
      onClick={e => onClickChoose(e, id)}
    >
      {content}
    </div>
  )
}

export default DragText
