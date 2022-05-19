/*
 * @Author: Ming
 * @Date: 2022-05-17 15:53:15
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-19 17:36:35
 * @Description: 请填写简介
 */
import MingCard from '@/base-ui/card'
import { useStores } from '@/store'
import { Form, Input, Button, Slider, Select } from '@arco-design/web-react'
import { observer } from 'mobx-react-lite'
import { formConfig, IFormItemType } from './config'
import SwitchType from './switch-formitem'
import * as React from 'react'

const FormItem = Form.Item

const DragController: React.FC = () => {
  const store = useStores()
  let curDragEle: any = { ...store.dragStore.currentDragEle } // 拷贝的副本，我们更改数据在这个对象中进行更改
  let { width, height, top, left, position } = curDragEle
  width = +width.split('%')[0]
  height = +height.split('%')[0]
  top = +top.split('%')[0]
  left = +left.split('%')[0]
  curDragEle = { ...curDragEle, height, width, top, left }
  const dragElementConfigTableKeys: any[] = Object.keys(curDragEle)
  let { id } = curDragEle // 根据id来判断是否使用了错误的id

  // 编辑drag
  const submitDragElementEdit = (value: any) => {
    let result = { ...curDragEle, ...value }
    let { width, height, top, left } = result
    width += '%'
    height += '%'
    top += '%'
    left += '%'
    store.dragStore.editDragElement({ ...result, width, height, top, left })
  }
  const editDragElement = () => store.dragStore.removeExactDragElement(id, true)

  function GetForm() {
    return (
      <Form
        onSubmit={submitDragElementEdit}
        initialValues={curDragEle}
        onChange={submitDragElementEdit}
      >
        {formConfig.map((config: any) => {
          const { field: key } = config

          //
          if (dragElementConfigTableKeys.includes(key)) {
            return <SwitchType config={config} key={key} />
          } else {
            return null
          }
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
