/*
 * @Author: Ming
 * @Date: 2022-05-21 19:25:58
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-02 17:32:24
 * @Description: 请填写简介
 */
import myRequest from '../index'
import { IAccount, ILoginResult } from './type'

enum LoginAPI {
  AccountLogin = '/agent/login',
}

export function accountLoginRequest(account: IAccount) {
  return myRequest.post<ILoginResult>({
    url: LoginAPI.AccountLogin,
    data: account,
  })
}
export {}
