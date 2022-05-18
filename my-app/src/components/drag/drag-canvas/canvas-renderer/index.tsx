/*
 * @Author: Ming
 * @Date: 2022-05-18 18:25:26
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 19:59:14
 * @Description: 请填写简介
 */
import { IDragElement } from '@/store/modules/drag-store/type'
import * as React from 'react'
import DragImage from '@/components/drag/be-dragged-element/drag-img'
import DragText from '@/components/drag/be-dragged-element/drag-text'
type AppProps = {
  dragElementList: IDragElement[]
}
const CanvasRenderer: React.FC<AppProps> = ({ dragElementList }) => {
  React.useEffect(() => {
    console.log(dragElementList)
  }, [dragElementList.length])
  return (
    <div>
      {dragElementList.map((dragElement: IDragElement) => {
        let { type, content, id, size, ...styleInfo } = dragElement
        if (type === 'img') {
          return <DragImage src={content} key={id} style={styleInfo} id={id}></DragImage>
        } else if (type === 'text') {
          return <DragText content={content} size={size} key={id} style={styleInfo} id={id} />
        } else {
          return <h1>出现了问题</h1>
        }
      })}
    </div>
  )
}

export default CanvasRenderer
