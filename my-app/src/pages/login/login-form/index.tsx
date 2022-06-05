/*
 * @Author: Ming
 * @Date: 2022-06-04 01:11:58
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-05 12:07:19
 * @Description: 请填写简介
 */
import useMessage from '@/hooks/message-hooks'
import { accountLoginRequest, accountRegisterRequest } from '@/service/login/login'
import { Form, Button, Input } from '@arco-design/web-react'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'

type AppProps = {
  type: string
}

const FormItem = Form.Item

const LoginForm: React.FC<AppProps> = ({ type }) => {
  const navigate = useNavigate()
  const [showMessage] = useMessage()
  const submit = async (e: any) => {
    if (type === 'login') {
      const result = await accountLoginRequest({ ...e })
      console.log(result)
      const { token } = result
      if (token) {
        showMessage('登录成功')
        navigate('/main')
      } else {
        showMessage('登陆失败', 'error')
      }
    } else if (type === 'register') {
      const result = await accountRegisterRequest({ ...e })
      const { message } = result
      showMessage(message)
    }
  }
  return (
    <div>
      <h1 className="title">{type}</h1>
      <div>
        <Form style={{ width: 600 }} onSubmit={v => submit(v)}>
          <FormItem label="账号" field="username">
            <Input placeholder="请输入你的账号" />
          </FormItem>
          <FormItem label="密码" field="password">
            <Input placeholder="请输入你的密码" />
          </FormItem>
          {type === 'register' && (
            <FormItem label="名字" field="name">
              <Input placeholder="请输入你的名字" />
            </FormItem>
          )}
          <FormItem
            wrapperCol={{
              offset: 5,
            }}
          >
            <Button type="primary" htmlType="submit">
              {type}
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm
