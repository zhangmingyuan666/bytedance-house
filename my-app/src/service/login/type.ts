/*
 * @Author: Ming
 * @Date: 2022-05-21 19:26:02
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 01:20:43
 * @Description: 请填写简介
 */
// 登录需要发送的请求类型
interface IAccount {
  username: string
  password: string
}

interface IAccountRegister extends IAccount {
  name: string
}

// 后端返回的登录信息
interface ILoginResult {
  token: string
  message: string
}

//如果是code和data搭配使用建议这样配置
// interface IDataType<T = any> {
//   code: number
//   data: T
// }

export type { IAccount, ILoginResult, IAccountRegister }

