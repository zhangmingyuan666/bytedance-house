import * as React from 'react'
import { Form, Input, Button, Checkbox } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const FormItem = Form.Item
  const [form] = Form.useForm()

  const navigate = useNavigate()
  const submit = (e: any) => {
    console.log(e)
    console.log('登陆成功')
    navigate('/main')
  }

  return (
    <div className="flex-center h-1 w-1 flex-dir-col">
      <h1>Login</h1>
      <div>
        <Form style={{ width: 600 }} form={form} onSubmit={v => submit(v)}>
          <FormItem label="Username" field="username">
            <Input placeholder="please enter your username..." />
          </FormItem>
          <FormItem label="Post" field="post">
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
  )
}

export default Login
