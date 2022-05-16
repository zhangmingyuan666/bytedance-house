import React from 'react';
import './App.css';
import hyRequest from '@/service'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/store'

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

function App() {
  const store = useStores()
  console.log(store)
  return <div className="App">123</div>
}

export default observer(App)
