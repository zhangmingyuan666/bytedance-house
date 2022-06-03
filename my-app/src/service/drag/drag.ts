/*
 * @Author: Ming
 * @Date: 2022-05-16 12:20:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-03 17:23:52
 * @Description: 请填写简介
 */

import { IDragHistory } from '@/store/modules/drag-store/type'
import myRequest from '../index'
import { IDragMessagePost } from './type'

enum DragAPI {
  postDragMessage = '/agent/saveJson',
  getDragHistoryList = '/agent/getAllJson',
  getDragHistoryDetail = '/agent/getJson',
}

// 用于POST JSON数据到后端
export function dragMessagePost(config: IDragMessagePost) {
  return myRequest.post<any>({
    url: DragAPI.postDragMessage,
    data: config,
  })
}

export function getDragHistoryList() {
  return myRequest.get<IDragHistory[]>({
    url: DragAPI.getDragHistoryList,
  })
}

export function getDragHistoryDetail(id: string) {
  return myRequest.get<any>({
    url: DragAPI.getDragHistoryDetail,
    params: { id },
  })
}
