import React from 'react'
import NumStore from './modules/num-store'

export const stores = React.createContext({
  num: NumStore
})

export const useStores = () => React.useContext(stores)
