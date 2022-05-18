import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { routes } from '@/router'

// createroute 创建路由
function RenderRoutes() {
  const element = useRoutes(routes)
  //console.log(element)
  return element
}

function App() {
  return (
    <div className="h-screen w-screenl">
      <Router>
        <RenderRoutes></RenderRoutes>
      </Router>
    </div>
  )
}

export default App

//import hyRequest from '@/service'
// hyRequest
//   .request({
//     url: '/playlist/hot',
//     //showLoading: false,
//     interceptors: {
//       requestInterceptors: (config) => {
//         console.log('单独请求的config')
//         return config
//       },
//       responseInterceptors: (res) => {
//         console.log('单独相应的res')
//         return res
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res)
//     //console.log(res.code)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
