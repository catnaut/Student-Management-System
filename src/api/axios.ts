import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  timeout: 5000
})

export interface ResponseData {
  code: number
  data: any
  message: string
  success: boolean
}

axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (Response) => {
    return Response.data
  },
  (error) => {
    if (error.response) {
      // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
      console.debug(error.response)
      return Promise.reject(error)
    } else if (error.request) {
      // 请求已经成功发起，但没有收到响应
      // `error.request` 在浏览器中是 XMLHttpRequest 的实例
      console.debug('No response received', error.request)
      // console.debug(error.request)
    } else {
      // 发送请求时出了点问题
      console.debug('Error', error.message)
      return Promise.reject(error)
    }
  }
)

export default axiosInstance

export const $http = async (config: AxiosRequestConfig) => {
  const resp = await axiosInstance<ResponseData>(config)
  return resp
}
//   try {
//     return resp
//   } catch (error) {
//     // console.log(error)
//     if (error instanceof AxiosError) {
//       console.log(error.message)
//       throw error
//     // return error
//     }
//   }
// }
