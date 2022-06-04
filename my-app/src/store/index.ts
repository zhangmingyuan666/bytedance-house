/*
 * @Author: Ming
 * @Date: 2022-05-16 12:20:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 21:00:03
 * @Description: 请填写简介
 */
import React from 'react'
import dragStore from './modules/drag-store'
export const stores = React.createContext({
  dragStore,
})

export const useStores = () => React.useContext(stores)
