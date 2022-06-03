/*
 * @Author: Ming
 * @Date: 2022-06-03 22:51:28
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 00:31:14
 * @Description: 请填写简介
 */
import * as React from 'react'
import { useState } from 'react'
import { Modal, Button, Form, Input, Select, Message } from '@arco-design/web-react'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/store'

const FormItem = Form.Item

const DragSubmit: React.FC = () => {
  const { dragStore } = useStores()
  const { postFinalDragResult, houseSourceId } = dragStore
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [form] = Form.useForm()

  function onOk() {
    form.validate().then(async (res: any) => {
      setConfirmLoading(true)
      const result = await postFinalDragResult(res)
      const { id } = result
      if (id) {
        Message.success('Success !')
        setVisible(false)
        setConfirmLoading(false)
      }
    })
  }

  const openModal = () => {
    if (!houseSourceId) {
      Message.warning('请先选择房源')
    } else {
      setVisible(true)
    }
  }

  return (
    <div>
      <Button onClick={openModal} type="primary">
        提交
      </Button>
      <Modal
        title="Add User"
        visible={visible}
        onOk={onOk}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        <Form
          form={form}
          labelCol={{ style: { flexBasis: 90 } }}
          wrapperCol={{ style: { flexBasis: 'calc(100% - 90px)' } }}
        >
          <FormItem label="作者" field="author" rules={[{ required: true }]}>
            <Input placeholder="" />
          </FormItem>
          <FormItem label="画布名字" field="name" rules={[{ required: true }]}>
            <Input placeholder="" />
          </FormItem>
        </Form>
      </Modal>
    </div>
  )
}

export default observer(DragSubmit)
