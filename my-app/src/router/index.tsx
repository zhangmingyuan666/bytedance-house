import { Navigate, RouteObject } from 'react-router-dom'
import Main from '@/pages/main'
import NotFound from '@/pages/not-found'
import Login from '@/pages/login'
import MainDrag from '@/pages/main/drag-scene'
import MainDragHistory from '@/pages/main/drag-history'

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
    path: '/main/*',
    element: <Main />,
    children: [
      {
        path: 'drag',
        element: <MainDrag></MainDrag>,
      },
      {
        path: 'drag-history',
        element: <MainDragHistory></MainDragHistory>,
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
