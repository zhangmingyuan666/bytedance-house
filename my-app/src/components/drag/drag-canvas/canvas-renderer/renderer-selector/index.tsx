/*
 * @Author: Ming
 * @Date: 2022-05-19 12:03:15
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-25 22:42:45
 * @Description: 请填写简介
 */
import { IDragElement } from '@/store/modules/drag-store/type'
import * as React from 'react'
import DragImage from '@/components/drag/be-dragged-element/drag-img'
import DragText from '@/components/drag/be-dragged-element/drag-text'
import DragAudio from '@/components/drag/be-dragged-element/drag-audio'
import DragVideo from '@/components/drag/be-dragged-element/drag-video'
type AppProps = {
  config: IDragElement
  isSelected: boolean
}

const RendererSelector: React.FC<AppProps> = ({ config, isSelected = false }) => {
  let { type, content, id, fontSize, ...styleInfo } = config
  if (type === 'img') {
    return (
      <DragImage
        src={content}
        key={id}
        style={styleInfo}
        id={id}
        isSelected={isSelected}
      ></DragImage>
    )
  } else if (type === 'text') {
    return (
      <DragText
        content={content}
        fontSize={fontSize}
        key={id}
        style={styleInfo}
        id={id}
        isSelected={isSelected}
      />
    )
  } else if (type === 'audio') {
    return (
      <DragAudio content={content} key={id} style={styleInfo} id={id} isSelected={isSelected} />
    )
  } else if (type === 'video') {
    return (
      <DragVideo content={content} key={id} style={styleInfo} id={id} isSelected={isSelected} />
    )
  } else {
    return <h1>出现了问题</h1>
  }
}

export default RendererSelector
