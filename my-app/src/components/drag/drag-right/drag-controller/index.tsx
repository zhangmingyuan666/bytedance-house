/*
 * @Author: Ming
 * @Date: 2022-05-17 15:53:15
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 01:41:05
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
import SwitchUpload from './switch-upload'

const FormItem = Form.Item

const DragController: React.FC = () => {
  const { dragStore } = useStores()

  let curDragEle = { ...dragStore.currentDragEle, ...dragStore.getPositionPercentToNumber }
  const dragElementConfigTableKeys: any[] = Object.keys({ ...curDragEle })
  let id = curDragEle.id ?? '' // 根据id来判断是否使用了错误的id

  // 编辑drag
  const editDragElement = (value: any) => {
    let result = { ...curDragEle, ...value }
    let { width, height, top, left } = result
    dragStore.editDragElement({
      ...result,
      width: width + '%',
      height: height + '%',
      top: top + '%',
      left: left + '%',
    })
  }

  const submitDragElementEdit = (value: any) => {
    editDragElement(value)
    dragStore.initDragElementConfig()
  }

  function handleValuesChange(key: any, all: any) {
    handleOffset(key, all, () => editDragElement(all))
  }

  const removeDragElement = () => dragStore.removeExactDragElement(id, true)

  const onUpload = (e: any, file: any) => {
    // 第二个参数用于处理结果
    console.log(file)
    if (file.status === 'done') {
      const remoteURL = file.response.filePath
      editDragElement({ ...dragStore.currentDragEle, content: remoteURL })
    }
    //editDragElement({ ...dragStore.currentDragEle, content: remoteURL })
  }
  function GetForm() {
    return (
      <Form
        onSubmit={submitDragElementEdit}
        initialValues={curDragEle}
        onValuesChange={(key, all) => handleValuesChange(key, all)}
        disabled={id ? false : true}
      >
        <SwitchUpload
          handleUpload={(e: any, file: any) => onUpload(e, file)}
          type={curDragEle.type}
        ></SwitchUpload>

        {formConfig.map((config: any) => {
          const { field: key } = config
          if (dragElementConfigTableKeys.includes(key)) {
            return <SwitchType config={config} key={key} id={id} formType={curDragEle.type ?? ''} />
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
