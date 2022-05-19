import { IDragElement } from '@/store/modules/drag-store/type'
import * as React from 'react'
import DragImage from '@/components/drag/be-dragged-element/drag-img'
import DragText from '@/components/drag/be-dragged-element/drag-text'
type AppProps = {
  config: IDragElement
}

const RendererSelector: React.FC<AppProps> = ({ config }) => {
  let { type, content, id, size, ...styleInfo } = config
  if (type === 'img') {
    return <DragImage src={content} key={id} style={styleInfo} id={id}></DragImage>
  } else if (type === 'text') {
    return <DragText content={content} size={size} key={id} style={styleInfo} id={id} />
  } else {
    return <h1>出现了问题</h1>
  }
}

export default RendererSelector
