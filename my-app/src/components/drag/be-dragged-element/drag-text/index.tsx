/*
 * @Author: Ming
 * @Date: 2022-05-17 23:38:21
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 19:58:43
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
}

const DragText: React.FC<AppProps> = ({
  id = '', // 初始化的时候是没有id的
  content = '我是文字噢',
  width = '200px',
  height = '50px',
  size = 3,
  style,
}) => {
  let myTextRef = React.useRef<HTMLDivElement | null>(null)
  const [onDragStart, onDragEnd, onClickChoose] = useDrag(myTextRef, 'text')
  // let TitleLevel: HTMLHeadingElement = `h${size}`
  // let color
  // if (style) {
  //   color = style.color
  // }
  return (
    // <div
    //   ref={myTextRef}
    //   style={{ width, height, ...style }}
    //   draggable="true"
    //   onDragEnd={e => onDragEnd(e, id)}
    //   onDragStart={e => onDragStart(e, id)}
    //   onClick={e => onClickChoose(e, id)}
    // >
    <span
      ref={myTextRef}
      style={{ ...style }}
      draggable="true"
      onDragEnd={e => onDragEnd(e, id)}
      onDragStart={e => onDragStart(e, id)}
      onClick={e => onClickChoose(e, id)}
    >
      {content}
    </span>
    //</div>
  )
}

export default DragText
