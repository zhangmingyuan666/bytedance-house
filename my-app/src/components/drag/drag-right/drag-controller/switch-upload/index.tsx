/*
 * @Author: Ming
 * @Date: 2022-05-25 11:04:48
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-25 11:36:55
 * @Description: 请填写简介
 */
import { DragType } from '@/store/modules/drag-store/type'
import { Button, Form } from '@arco-design/web-react'
import * as React from 'react'
const FormItem = Form.Item
type AppProps = {
  type: DragType
  handleUpload: any
}

const SwitchUpload: React.FC<AppProps> = ({ type, handleUpload }) => {
  if (type === 'img') {
    return (
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button>
          <input type="file" onChange={e => handleUpload(e)} accept="image/png, image/jpeg" />
        </Button>
      </FormItem>
    )
  } else if (type === 'video') {
    return (
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button>
          <input type="file" onChange={e => handleUpload(e)} accept="video/mp4" />
        </Button>
      </FormItem>
    )
  } else if (type === 'audio') {
    return (
      <FormItem wrapperCol={{ offset: 5 }}>
        <Button>
          <input type="file" onChange={e => handleUpload(e)} accept="audio/mp3" />
        </Button>
      </FormItem>
    )
  } else {
    return null
  }
}

export default SwitchUpload
