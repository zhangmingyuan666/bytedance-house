/*
 * @Author: Ming
 * @Date: 2022-05-19 15:58:02
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-23 21:56:09
 * @Description: 请填写简介
 */
import { Form, Input, Modal, Select, Slider, Upload } from '@arco-design/web-react'
import * as React from 'react'
import { IFormConfig } from '../config'

const FormItem = Form.Item
const Option = Select.Option

type AppProps = {
  config: IFormConfig
  id?: string
  formType: string
}

const SwitchType: React.FC<AppProps> = ({ config, id = '', formType }) => {
  const { label, field, disabled = false, type, options } = config
  let isSelected: boolean = id ? false : true
  let isDisabled: boolean = isSelected || disabled

  //console.log(id ? false : true && disabled)
  if (type === 'input') {
    return (
      <FormItem label={label} field={field} disabled={isDisabled}>
        <Input></Input>
      </FormItem>
    )
  } else if (type === 'slider') {
    return (
      <FormItem label={label} field={field} disabled={isDisabled}>
        <Slider></Slider>
      </FormItem>
    )
  } else if (type === 'select') {
    return (
      <FormItem label={label} field={field} disabled={isDisabled}>
        <Select>
          {options!.map((option: any) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </FormItem>
    )
  }

  return <div>出现了大问题</div>
}

export default SwitchType
