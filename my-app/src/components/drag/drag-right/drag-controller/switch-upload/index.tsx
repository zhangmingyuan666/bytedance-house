/*
 * @Author: Ming
 * @Date: 2022-05-25 11:04:48
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-03 17:52:02
 * @Description: 请填写简介
 */
import { DragType } from '@/store/modules/drag-store/type'
import { Button, Form, Upload } from '@arco-design/web-react'
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
        <Upload
          action="http://180.184.74.142/file/uploadFile"
          multiple
          accept="image/png, image/jpeg"
          onChange={(e: any, file: any) => handleUpload(e, file)}
        ></Upload>
      </FormItem>
    )
  } else if (type === 'video') {
    return (
      <FormItem wrapperCol={{ offset: 5 }}>
        <Upload
          action="http://180.184.74.142/file/uploadFile"
          multiple
          accept="video/mp4"
          onChange={(e: any, file: any) => handleUpload(e, file)}
        ></Upload>
      </FormItem>
    )
  } else if (type === 'audio') {
    return (
      <FormItem wrapperCol={{ offset: 5 }}>
        <Upload
          action="http://180.184.74.142/file/uploadFile"
          multiple
          accept="audio/mp3"
          onChange={(e: any, file: any) => handleUpload(e, file)}
        ></Upload>
      </FormItem>
    )
  } else {
    return null
  }
}

export default SwitchUpload
