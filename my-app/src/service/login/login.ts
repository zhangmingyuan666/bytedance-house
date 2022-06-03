/*
 * @Author: Ming
 * @Date: 2022-05-21 19:25:58
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 01:22:03
 * @Description: 请填写简介
 */
import myRequest from '../index'
import { IAccount, IAccountRegister, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/agent/login',
  AccountRegister = '/agent/registerAgent',
}

export function accountLoginRequest(account: IAccount) {
  return myRequest.post<ILoginResult>({
    url: LoginAPI.AccountLogin,
    data: account,
  })
}

export function accountRegisterRequest(account: IAccountRegister) {
  return myRequest.post<any>({
    url: LoginAPI.AccountRegister,
    data: account,
  })
}
