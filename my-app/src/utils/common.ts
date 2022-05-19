/*
 * @Author: Ming
 * @Date: 2022-05-19 15:07:23
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-19 19:16:29
 * @Description: 请填写简介
 */
/**
 * @description: 用于将数字类型转化为百分比
 * @param totalLength:分母
 * @param target:分子
 * @return {返回半分比}
 */
export function transformPositionPxToPercent(totalLength: number, target: number): string {
  return ((target / totalLength) * 100).toFixed(0) + '%'
}

// 从百分比变为数字
export function transformPositionPercentToPx(totalLength: number, target: string): number {
  let pureNumber = +target.split('%')[0]
  return (pureNumber / 100) * totalLength
}

/**
 * @description: 描述一个盒子是否越界
 * @param position 定位的[left,top]
 * @param size 元素的[width, height]
 * @param border 边界 {x, y}
 * @return {如果没有越界返回false，如果有越界返回true}
 */
export const isOffside = (position: any, size: any, border: any) => {
  const [left, top] = position
  const [width, height] = size
  if (top < 0 || left < 0) {
    return true
  }
  const x = left + width
  const y = top + height
  const { borderX, borderY } = border

  // return false代表没有越界
  if (x >= 0 && x <= borderX && y >= 0 && y <= borderY) {
    return false
  }

  return true
}
