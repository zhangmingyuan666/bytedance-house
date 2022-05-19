/*
 * @Author: Ming
 * @Date: 2022-05-17 23:38:21
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-19 19:20:59
 * @Description: text drag element
 */
import useDrag from '@/hooks/drag-hooks'
import * as React from 'react'

type AppProps = {
  id?: string
  content?: string
  size?: number
  width?: string
  height?: string
  style?: any
  isSelected?: boolean
}

const DragText: React.FC<AppProps> = ({
  id = '', // 初始化的时候是没有id的
  content = '我是文字噢',
  width = '200px',
  height = '50px',
  size = 16,
  style,
  isSelected = false,
}) => {
  let myTextRef = React.useRef<HTMLDivElement | null>(null)
  const [onDragStart, onDragEnd, onClickChoose] = useDrag(myTextRef, 'text')

  return (
    <div
      ref={myTextRef}
      style={{ ...style, width, height, fontSize: size + 'px' }}
      className={isSelected ? 'ring-black ring-2' : ''}
      draggable="true"
      onDragEnd={e => onDragEnd(e, id)}
      onDragStart={e => onDragStart(e, id)}
      onClick={e => onClickChoose(e, id)}
    >
      <span className="w-full h-full">{content}</span>
    </div>
  )
}

export default DragText
