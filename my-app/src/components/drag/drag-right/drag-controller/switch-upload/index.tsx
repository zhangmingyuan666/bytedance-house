/*
 * @Author: Ming
 * @Date: 2022-05-25 11:04:48
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-06 23:05:45
 * @Description: 请填写简介
 */
import { DragType } from '@/store/modules/drag-store/type'
import { Form, Upload } from '@arco-design/web-react'
import * as React from 'react'
const FormItem = Form.Item
type AppProps = {
  type: DragType
  handleUpload: any
}

const SwitchUpload: React.FC<AppProps> = ({ type, handleUpload }) => {
  console.log(type)
  console.log(123123123)
  const getAllowedType = () => {
    let selectType = ''
    console.log(type)
    switch (type) {
      case 'img':
        selectType = 'image/png, image/jpeg'
        break
      case 'video':
        selectType = 'video/mp4'
        break
      case 'audio':
        selectType = 'audio/mp3'
        break
      default:
        break
    }

    return selectType
  }

  return getAllowedType() ? (
    <FormItem wrapperCol={{ offset: 5 }}>
      <Upload
        action="http://180.184.74.142:30001/file/uploadFile"
        multiple
        accept={getAllowedType()}
        onChange={(e: any, file: any) => handleUpload(e, file)}
      ></Upload>
    </FormItem>
  ) : null
}

export default SwitchUpload
