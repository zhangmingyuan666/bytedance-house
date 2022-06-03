/*
 * @Author: Ming
 * @Date: 2022-05-16 12:20:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 01:24:34
 * @Description: 请填写简介
 */

import myRequest from '../index'

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
