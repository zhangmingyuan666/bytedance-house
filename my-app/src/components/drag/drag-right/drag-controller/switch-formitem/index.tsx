/*
 * @Author: Ming
 * @Date: 2022-05-19 15:58:02
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-19 17:35:49
 * @Description: 请填写简介
 */
import { Form, Input, Select, Slider } from '@arco-design/web-react'
import * as React from 'react'
import { IFormConfig } from '../config'

const FormItem = Form.Item
const Option = Select.Option

type AppProps = {
  config: IFormConfig
}

const SwitchType: React.FC<AppProps> = ({ config }) => {
  const { label, field, disabled, type, selectOptions } = config
  if (type === 'input') {
    return (
      <FormItem label={label} field={field} disabled={disabled}>
        <Input></Input>
      </FormItem>
    )
  } else if (type === 'slider') {
    return (
      <FormItem label={label} field={field} disabled={disabled}>
        <Slider></Slider>
      </FormItem>
    )
  } else if (type === 'select') {
    return (
      <FormItem label={label} field={field} disabled={disabled}>
        <Select>
          {selectOptions!.map(option => (
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
