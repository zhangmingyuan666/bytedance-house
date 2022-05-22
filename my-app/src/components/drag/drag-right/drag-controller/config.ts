/*
 * @Author: Ming
 * @Date: 2022-05-19 15:30:49
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-21 16:10:04
 * @Description: 请填写简介
 */
export type IFormItemType = 'input' | 'number' | 'select' | 'slider'
export interface IFormConfig {
  field: string
  label: string
  type?: IFormItemType
  disabled?: boolean
  selectOptions?: number[]
}

export const formConfig: IFormConfig[] = [
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
    field: 'content',
    label: '内容',
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
    field: 'size',
    label: '字体的大小',
    type: 'slider',
  },
  {
    field: 'zIndex',
    label: '层级',
    type: 'select',
    selectOptions: [1, 2, 3, 999],
  },
]
