import axios from 'axios'
// import { ElLoading } from 'element-plus'
// import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import type { AxiosInstance } from 'axios'
import type { HyRequestInterceptors, HyRequestConfig } from './type'

const DEFAULT_LOADING = true

class MyRequest {
  instance: AxiosInstance
  interceptors?: HyRequestInterceptors
  // loading?: LoadingInstance
  showLoading: boolean

  constructor(config: HyRequestConfig) {
    this.instance = axios.create(config)
    //默认是。如果不传，那么就是true，也就是显示
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    //下方两个是默认的方法
    this.instance.interceptors.request.use(
      config => {
        console.log('所有实例请求拦截成功')

        if (this.showLoading) {
          // this.loading = ElLoading.service({
          //   lock: true,
          //   text: '正在请求数据捏',
          //   background: 'rgba(0, 0, 0, 0.5)'
          // })
        }
        return config
      },
      err => {
        console.log('所有实例请求拦截失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      res => {
        console.log('所有响应拦截成功')
        //this.loading?.close()
        //在这里处理信息的拦截
        console.log(res)
        return res.data ?? res
      },
      err => {
        console.log('所有实例响应拦截失败')
        //this.loading?.close()
        //在这里处理错误的处理
        if (err.response.status === '404') {
          console.log('404错误')
        }
        return err
      }
    )
  }

  //请求需要类型，因为只有请求者知道他要使用什么接口
  request<T>(config: HyRequestConfig<T>): Promise<T> {
    return new Promise((reslove, reject) => {
      //如果有自己的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }

      //如果当前组件传进来false，那么不显示
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      //执行当前请求
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //1. 单个请求对数据的处理
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          //2. 不要影响下次请求
          this.showLoading = DEFAULT_LOADING

          //3. 将我们的请求结果返回
          console.log(res)
          reslove(res)
        })
        .catch((err) => {
          //不要影响下次请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default MyRequest
