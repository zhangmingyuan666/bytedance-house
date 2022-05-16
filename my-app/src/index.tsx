import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/App'
// 引入base.css
import './index.css'
//引入acro-design的CSS样式
import '@arco-design/web-react/dist/css/arco.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
