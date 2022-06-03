/*
 * @Author: Ming
 * @Date: 2022-05-16 17:05:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-03 13:01:34
 * @Description: 请填写简介
 */
import * as React from 'react'
import { Form, Input, Button, Checkbox } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'
import { accountLoginRequest } from '@/service/login/login'

const Login: React.FC = () => {
  const FormItem = Form.Item
  const [form] = Form.useForm()

  const navigate = useNavigate()
  const submit = async (e: any) => {
    console.log(e)
    console.log('登陆成功')
    const result = await accountLoginRequest({ ...e })

    const { token } = result
    if (token) {
      navigate('/main')
    }
  }

  return (
    // <div className="flex-center h-1 w-1 flex-dir-col">
    <div className="ming-center">
      <div className="shadow-inner p-10 rounded-3xl border-2">
        <h1 className="title">Login</h1>
        <div>
          <Form style={{ width: 600 }} form={form} onSubmit={v => submit(v)}>
            <FormItem label="Username" field="username">
              <Input placeholder="please enter your username..." />
            </FormItem>
            <FormItem label="Password" field="password">
              <Input placeholder="please enter your post..." />
            </FormItem>
            <FormItem
              wrapperCol={{
                offset: 5,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
