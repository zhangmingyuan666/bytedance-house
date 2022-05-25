/*
 * @Author: Ming
 * @Date: 2022-05-17 15:53:48
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-25 10:45:05
 * @Description: 请填写简介
 */
import { useStores } from '@/store'
import { Button } from '@arco-design/web-react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'

const DragJSON: React.FC = () => {
   const { dragStore } = useStores()
   const { resultDragList, getContainerProportion } = dragStore
   const result = {
     author: 'Ming',
     canvasProportion: getContainerProportion,
     date: new Date(),
     name: '汤臣一品吴彦祖套房',
     children: resultDragList,
   }

   return <Button onClick={() => console.log(result)}>点击在控制台输出JSON</Button>
}

export default observer(DragJSON)
