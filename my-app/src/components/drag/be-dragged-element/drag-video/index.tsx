/*
 * @Author: Ming
 * @Date: 2022-05-17 23:38:52
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 22:05:03
 * @Description: 请填写简介
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

const DragVideo: React.FC<AppProps> = ({
  id = '', // 初始化的时候是没有id的
  content = '我是音频噢',
  style,
  height,
  width,
  isSelected = false,
}) => {
  let myVideoRef = React.useRef<HTMLDivElement | null>(null)
  const [onDragStart, onDragEnd, onClickChoose] = useDrag(myVideoRef, 'video')
  return (
    <div
      ref={myVideoRef}
      style={{ ...style, width, height }}
      className={isSelected ? 'ring-black ring-2' : ''}
      draggable="true"
      onDragEnd={e => onDragEnd(e, id, myVideoRef)}
      onDragStart={e => onDragStart(e, id)}
      onClick={e => onClickChoose(e, id)}
    >
      {id ? (
        <video controls height={height} width={width}>
          <source src={content} type="video/mp4" />
        </video>
      ) : (
        <p>视频</p>
      )}
    </div>
  )
}

export default DragVideo
