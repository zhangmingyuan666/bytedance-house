import { findMenuByUrl } from '@/utils/route-utils'
import * as React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const useRouter = (rootUrl: string) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [url, setUrl] = React.useState(rootUrl)

  const routerTo = (targetUrl: string) => {
    const navigateUrl = rootUrl + targetUrl
    setUrl(navigateUrl)
    navigate(navigateUrl)
  }

  const getDefaultSelectedKeys = () => {
    const { pathname } = location
    return findMenuByUrl(pathname)
  }

  return [routerTo, getDefaultSelectedKeys] as const
}

export default useRouter
