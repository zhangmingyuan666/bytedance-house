/*
 * @Author: Ming
 * @Date: 2022-05-18 14:28:25
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 19:57:15
 * @Description: 请填写简介
 */
import DragText from './drag-text'
import DragImage from './drag-img'
import DragAudio from './drag-audio'
import DragVideo from './drag-video'

const beDragComponents = [
  {
    title: '图片',
    component: DragImage,
  },
  {
    title: '文本',
    component: DragText,
  },
  {
    title: '音频',
    component: DragAudio,
  },
  {
    title: '视频',
    component: DragVideo,
  },
]

export default beDragComponents
