import { Message } from '@arco-design/web-react'

/*
 * @Author: Ming
 * @Date: 2022-05-21 15:34:34
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-25 22:46:56
 * @Description: 请填写简介
 */
interface IPosition {
  x: number
  y: number
}
/**
 * @description: 描述一个盒子是否越界
 * @param position 定位的[left,top]
 * @param size 元素的[width, height]
 * @param border 边界 {x, y}
 * @return {如果没有越界返回false，如果有越界返回true}
 */
export const isOffside = (
  left: number,
  top: number,
  width: number,
  height: number,
  border: IPosition
) => {
  if (top < 0 || left < 0) {
    return true
  }
  const x = left + width
  const y = top + height
  const { x: borderX, y: borderY } = border
  console.log(x)
  console.log(y)
  // return false代表没有越界
  if (x >= 0 && x <= borderX && y >= 0 && y <= borderY) {
    return false
  }

  return true
}

export const handleOffset = (beHandledObj: any, allObj: any, callback?: any) => {
  let key = Object.keys(beHandledObj)[0]
  let value = beHandledObj[key]

  if (key === 'top') {
    const height = allObj['height']
    if (value + height > 100) {
      Message.info('GG!')
      return
    }
  } else if (key === 'left') {
    const width = allObj['width']
    if (value + width > 100) {
      Message.info('GG!')
      return
    }
  } else if (key === 'height') {
    const top = allObj['top']
    if (value + top > 100) {
      Message.info('GG!')
      return
    }
  } else if (key === 'width') {
    const left = allObj['left']
    if (value + left > 100) {
      Message.info('GG!')
      return
    }
  } else if (key === 'fontSize') {
    callback && callback()
    return
  } else {
    return
  }
  // 处理回调
  callback && callback()
}
