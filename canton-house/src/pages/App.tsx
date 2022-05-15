import React from 'react';
import './App.css';
import hyRequest from '@/service'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/store'

function App() {
  const store = useStores()
  return <div className="w-1 h-1">123</div>
}

export default observer(App)

hyRequest
  .request({
    url: '/playlist/hot',
    //showLoading: false,
    interceptors: {
      requestInterceptors: (config) => {
        console.log('单独请求的config')
        return config
      },
      responseInterceptors: (res) => {
        console.log('单独相应的res')
        return res
      }
    }
  })
  .then((res) => {
    console.log(res)
    //console.log(res.code)
  })
  .catch((err) => {
    console.log(err)
  })
