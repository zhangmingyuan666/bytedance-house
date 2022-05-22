/*
 * @Author: Ming
 * @Date: 2022-05-17 15:53:15
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-22 22:32:03
 * @Description: 请填写简介
 */
import SwitchType from './switch-formitem'
import * as React from 'react'
import MingCard from '@/base-ui/card'
import { useStores } from '@/store'
import { Form, Button } from '@arco-design/web-react'
import { observer } from 'mobx-react-lite'
import { formConfig } from './config'
import { handleOffset } from '@/utils/drag-utils'
import { withDebounce } from '@/utils/common'

const FormItem = Form.Item

const DragController: React.FC = () => {
  const store = useStores()
  let curDragEle: any = { ...store.dragStore.currentDragEle } // 拷贝的副本，我们更改数据在这个对象中进行更改
  let { width, height, top, left } = curDragEle
  width = +width.split('%')[0]
  height = +height.split('%')[0]
  top = +top.split('%')[0]
  left = +left.split('%')[0]
  curDragEle = { ...curDragEle, height, width, top, left }
  const dragElementConfigTableKeys: any[] = Object.keys(curDragEle)
  let id = curDragEle.id ?? '' // 根据id来判断是否使用了错误的id

  // 编辑drag
  const editDragElement = (value: any) => {
    let result = { ...curDragEle, ...value }
    let { width, height, top, left } = result
    width += '%'
    height += '%'
    top += '%'
    left += '%'
    store.dragStore.editDragElement({ ...result, width, height, top, left })
  }

  const submitDragElementEdit = (value: any) => {
    editDragElement(value)
    store.dragStore.initDragElementConfig()
  }

  function handleValuesChange(key: any, all: any) {
    handleOffset(key, all, () => editDragElement(all))
  }

  const removeDragElement = () => store.dragStore.removeExactDragElement(id, true)

  function GetForm() {
    return (
      <Form
        onSubmit={submitDragElementEdit}
        initialValues={curDragEle}
        onValuesChange={(key, all) => handleValuesChange(key, all)}
        disabled={id ? false : true}
      >
        {formConfig.map((config: any) => {
          const { field: key } = config
          if (dragElementConfigTableKeys.includes(key)) {
            return <SwitchType config={config} key={key} id={id} />
          } else {
            return null
          }
        })}
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type="primary" status="danger" onClick={removeDragElement}>
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
