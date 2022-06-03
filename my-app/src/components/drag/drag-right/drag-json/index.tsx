/*
 * @Author: Ming
 * @Date: 2022-05-17 15:53:48
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 00:23:10
 * @Description: 请填写简介
 */
import { observer } from 'mobx-react-lite'
import * as React from 'react'
import DragSubmit from '../../submit'

const DragJSON: React.FC = () => {
  return (
    <div>
      <DragSubmit></DragSubmit>
    </div>
  )
}

export default observer(DragJSON)
