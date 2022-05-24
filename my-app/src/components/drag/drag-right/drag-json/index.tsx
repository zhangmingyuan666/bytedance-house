/*
 * @Author: Ming
 * @Date: 2022-05-17 15:53:48
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 20:10:19
 * @Description: 请填写简介
 */
import { useStores } from '@/store'
import { observer } from 'mobx-react-lite'
import * as React from 'react'

const DragJSON: React.FC = () => {
  // const { dragStore } = useStores()
  // const { resultDragList } = dragStore
  return <div>{/* {JSON.stringify(resultDragList)}     */}</div>
}

export default observer(DragJSON)
