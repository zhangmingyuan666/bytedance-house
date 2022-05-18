import React from 'react'
import NumStore from './modules/num-store'
import dragStore from './modules/drag-store'
export const stores = React.createContext({
  num: NumStore,
  dragStore,
})

export const useStores = () => React.useContext(stores)
