/*
 * @Author: Ming
 * @Date: 2022-06-04 01:11:58
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 01:21:18
 * @Description: 请填写简介
 */
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
  const submit = async (e: any) => {
    if (type === 'login') {
      const result = await accountLoginRequest({ ...e })
      const { token } = result
      if (token) {
        navigate('/main')
      }
    } else if (type === 'register') {
      const result = await accountRegisterRequest({ ...e })
      console.log(result)
    }
  }
  return (
    <div>
      <h1 className="title">{type}</h1>
      <div>
        <Form style={{ width: 600 }} onSubmit={v => submit(v)}>
          <FormItem label="Username" field="username">
            <Input placeholder="please enter your username..." />
          </FormItem>
          <FormItem label="Password" field="password">
            <Input placeholder="please enter your post..." />
          </FormItem>
          {type === 'register' && (
            <FormItem label="name" field="name">
              <Input placeholder="please enter your post..." />
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
