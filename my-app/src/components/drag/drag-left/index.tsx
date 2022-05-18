/*
 * @Author: Ming
 * @Date: 2022-05-17 15:45:11
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 20:25:59
 * @Description: 请填写简介
 */
import * as React from 'react'
import DragAdmin from './drag-admin'
import DragArea from './drag-area'
const DragLeft: React.FC = () => {
  return (
    <div className="flex-1">
      <DragAdmin />
      <DragArea />
    </div>
  )
}

export default DragLeft
