import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HyRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptors?: (config: T) => T
  // responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (error: any) => any
}

export interface HyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HyRequestInterceptors<T>
  showLoading?: boolean
}
