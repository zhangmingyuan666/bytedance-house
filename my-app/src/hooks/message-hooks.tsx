/*
 * @Author: Ming
 * @Date: 2022-06-05 11:22:37
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-05 11:50:22
 * @Description: 请填写简介
 */
import { Message } from '@arco-design/web-react'
import * as React from 'react'

type IMessageType = '' | 'warn' | 'error' | 'success'
const useMessage = () => {
  const showMessage = (info: string, type?: IMessageType) => {
    switch (type) {
      case 'warn':
        Message.warning(info)
        break
      case 'success':
        Message.success(info)
        break
      case 'error':
        Message.error(info)
        break
      default:
        Message.info(info)
    }
  }

  return [showMessage] as const
}

export default useMessage
