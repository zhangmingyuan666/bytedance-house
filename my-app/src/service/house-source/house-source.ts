/*
 * @Author: Ming
 * @Date: 2022-05-16 12:20:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-03 21:15:33
 * @Description: 请填写简介
 */

import { IDragHistory } from '@/store/modules/drag-store/type'
import myRequest from '../index'
import { IHouseSource } from './type'

enum HouseSourceAPI {
  allHouseSource = '/agent/getHouseList',
  onlyHouseSourceDetail = '/agent/getHouseInfo',
}

// 用于POST JSON数据到后端

export function getAllHouseSource() {
  return myRequest.get<any>({
    url: HouseSourceAPI.allHouseSource,
  })
}

export function getOnlyHouseSourceDetail(id: string) {
  return myRequest.get<any>({
    url: HouseSourceAPI.onlyHouseSourceDetail,
    params: { id },
  })
}
