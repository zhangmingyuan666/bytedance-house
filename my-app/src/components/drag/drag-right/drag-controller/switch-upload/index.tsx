/*
 * @Author: Ming
 * @Date: 2022-05-25 11:04:48
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 21:27:56
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
  const getAllowedType = () => {
    let selectType = ''
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
        throw Error('你传入了一个错误的类型')
    }

    return selectType
  }
  return type ? (
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
