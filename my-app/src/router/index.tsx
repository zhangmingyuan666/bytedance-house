import { Navigate, RouteObject } from 'react-router-dom'
import Main from '@/pages/main'
import NotFound from '@/pages/not-found'
import Login from '@/pages/login'
import MainDrag from '@/pages/main/drag-scene'
import MainDragHistory from '@/pages/main/drag-history'
import MainAboutUs from '@/pages/main/about-us'
import MainCallOnline from '@/pages/main/call-online'
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      //如果回到根，默认回到登录界面
      { path: '', element: <Navigate to="/login" /> }, // Redirect 重定向！
    ],
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      //此处用于配置进入页面后的默认url
      { path: '', element: <Navigate to="/main/about-us" /> }, // Redirect 重定向！
      {
        path: 'drag',
        element: <MainDrag></MainDrag>,
      },
      {
        path: 'drag-history',
        element: <MainDragHistory></MainDragHistory>,
      },
      {
        path: 'about-us',
        element: <MainAboutUs></MainAboutUs>,
      },
      {
        path: 'call-online',
        element: <MainCallOnline></MainCallOnline>,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
