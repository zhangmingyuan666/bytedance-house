/*
 * @Author: Ming
 * @Date: 2022-05-16 17:05:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 01:23:48
 * @Description: 请填写简介
 */
import * as React from 'react'
import { Button } from '@arco-design/web-react'
import LoginForm from './login-form'

const Login: React.FC = () => {
  const [formType, setFormType] = React.useState('login')

  return (
    // <div className="flex-center h-1 w-1 flex-dir-col">
    <div className="ming-center">
      <div className="shadow-inner p-10 rounded-3xl border-2">
        <div className="text-center">
          <Button className="mx-2" onClick={() => setFormType('login')}>
            Login
          </Button>
          <Button onClick={() => setFormType('register')}>Register</Button>
        </div>
        <LoginForm type={formType}></LoginForm>
      </div>
    </div>
  )
}

export default Login
