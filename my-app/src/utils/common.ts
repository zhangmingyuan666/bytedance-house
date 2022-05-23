/*
 * @Author: Ming
 * @Date: 2022-05-19 15:07:23
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-23 18:19:53
 * @Description: 常用utils
 */

import { ObservableMap } from 'mobx'

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

//

/**
 * @description: 防抖函数：一段时间内重复发生请求，最后一次为准
 * @param fn 传入的函数
 * @param delay 趣味加时
 * @return {*}
 */
export function withDebounce(func: any, delay: number) {
  var timer: number
  return function () {
    if (timer) {
      console.log('timer存在')
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(function () {
      func()
    }, delay)
  }
}

/**
 * @description: 节流函数：在delay时间内只执行一次（第一次为准）
 * @param fn 传入的函数
 * @param delay 趣味加时
 * @return {*}
 */
export function withThrottle(func: any, delay: number, thisArg?: any) {
  var timeStamp: number
  return function (...args: any[]) {
    var nowTimeStamp = Date.now()
    if (!timeStamp || nowTimeStamp - timeStamp >= delay) {
      func.apply(thisArg, args)
      timeStamp = nowTimeStamp
    }
  }
}

export function mapToArray(map: ObservableMap<number, number>) {
  const arr: number[] = []
  console.log(map)
  map.forEach(function (value, key, map) {
    arr.push(key)
  })
  return arr
}
