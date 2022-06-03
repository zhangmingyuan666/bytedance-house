/*
 * @Author: Ming
 * @Date: 2022-05-17 15:53:48
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-03 17:36:57
 * @Description: 请填写简介
 */
import { dragMessagePost } from '@/service/drag/drag'
import { IDragMessageJSON, IDragMessagePost } from '@/service/drag/type'
import { useStores } from '@/store'
import { Button } from '@arco-design/web-react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'

const DragJSON: React.FC = () => {
   const { dragStore } = useStores()
   const { getContainerProportion, resultDragList } = dragStore

   const postDragELementAction = () => {
     const requestConfig: IDragMessageJSON = {
       author: '张嘉文',
       canvasProportion: getContainerProportion,
       date: new Date(),
       name: '酱紫胡闹租房',
       data: resultDragList,
     }
     const result = dragMessagePost({ json: JSON.stringify(requestConfig) })
     console.log(result)
   }

   return <Button onClick={() => postDragELementAction()}>提交</Button>
}

export default observer(DragJSON)
