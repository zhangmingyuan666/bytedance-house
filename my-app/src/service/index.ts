import HyRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
//import localCache from '@/utils/cathe'
const hyRequest = new HyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      // const token = localCache.getCache('token')

      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }

      return config
    },

    requestInterceptorsCatch: (err) => {
      return err
    },

    responseInterceptors: (res) => {
      return res
    },

    responseInterceptorsCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
