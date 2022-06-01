/*
 * @Author: Ming
 * @Date: 2022-05-19 15:30:49
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-25 22:44:14
 * @Description: 请填写简介
 */
export type IFormItemType = 'input' | 'number' | 'select' | 'slider'
export interface IFormConfig {
  field: string
  label: string
  type?: IFormItemType
  disabled?: boolean
  options?: any
}

export const formConfig: IFormConfig[] = [
  {
    field: 'content',
    label: '内容',
    type: 'input',
    options: 'upload',
  },
  {
    field: 'id',
    label: 'id',
    disabled: true,
    type: 'input',
  },
  {
    field: 'type',
    label: '种类',
    disabled: true,
    type: 'input',
  },
  {
    field: 'name',
    label: '组件名字',
    type: 'input',
  },
  {
    field: 'top',
    label: '距离顶部距离',
    type: 'slider',
  },
  {
    field: 'left',
    label: '距离左边距离',
    type: 'slider',
  },
  {
    field: 'width',
    label: '宽度',
    type: 'slider',
  },
  {
    field: 'height',
    label: '高度',
    type: 'slider',
  },
  {
    field: 'fontSize',
    label: '字体的大小',
    type: 'slider',
  },
  {
    field: 'zIndex',
    label: '层级',
    type: 'select',
    options: [1, 2, 3, 999],
  },
]
