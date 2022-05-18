/*
 * @Author: Ming
 * @Date: 2022-05-17 15:53:15
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 23:13:17
 * @Description: 请填写简介
 */
import MingCard from '@/base-ui/card'
import { useStores } from '@/store'
import { Form, Input, Button } from '@arco-design/web-react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'

const FormItem = Form.Item

const DragController: React.FC = () => {
  const store = useStores()
  const curDragEle: any = { ...store.dragStore.currentDragEle } // 拷贝的副本，我们更改数据在这个对象中进行更改
  const dragElementConfigTableKeys: any[] = Object.keys(curDragEle)
  let { id } = curDragEle // 根据id来判断是否使用了错误的id

  // 编辑drag
  const submitDragElementEdit = (value: any) => store.dragStore.editDragElement(value)
  const editDragElement = () => store.dragStore.removeExactDragElement(id, true)

  function GetForm() {
    return (
      <Form onSubmit={submitDragElementEdit}>
        {dragElementConfigTableKeys.map((key: any) => {
          return (
            <FormItem
              label={key}
              key={key}
              field={key}
              disabled={key === 'position' || key === 'type' || key === 'id'}
              initialValue={curDragEle[key]}
            >
              <Input></Input>
            </FormItem>
          )
        })}
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type="primary" status="danger" onClick={editDragElement}>
            删除这个节点
          </Button>
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type="primary" htmlType="submit">
            确定这次的更改
          </Button>
        </FormItem>
      </Form>
    )
  }

  return (
    <MingCard title="组件 Controller">
      <GetForm />
    </MingCard>
  )
}

export default observer(DragController)
