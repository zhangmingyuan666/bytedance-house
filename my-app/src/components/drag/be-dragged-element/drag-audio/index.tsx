/*
 * @Author: Ming
 * @Date: 2022-05-17 23:38:52
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 21:50:13
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

const DragAudio: React.FC<AppProps> = ({
  id = '', // 初始化的时候是没有id的
  content = '我是音频噢',
  style,
  isSelected = false,
}) => {
  let myAudioRef = React.useRef<HTMLDivElement | null>(null)
  const [onDragStart, onDragEnd, onClickChoose] = useDrag(myAudioRef, 'audio')
  return (
    <div
      ref={myAudioRef}
      style={{ ...style }}
      className={isSelected ? 'ring-black ring-2' : ''}
      draggable="true"
      onDragEnd={e => onDragEnd(e, id, myAudioRef)}
      onDragStart={e => onDragStart(e, id)}
      onClick={e => onClickChoose(e, id)}
    >
      {id ? <audio src={content} controls className="w-full h-full"></audio> : <p>音频</p>}
    </div>
  )
}

export default DragAudio
