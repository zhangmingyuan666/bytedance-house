import { IMenu, IMenuList } from './type'
import {
  IconHome,
  IconDragArrow,
  IconHistory,
  IconMore,
  IconVoice,
  IconIdcard,
} from '@arco-design/web-react/icon'

const menuList: IMenuList[] = [
  {
    type: 1,
    key: '0_1',
    text: '关于我们',
    url: '/drag',
    icon: IconIdcard,
  },
  {
    type: 1,
    key: '0_2',
    text: '实时语音',
    url: '/drag',
    title: '123',
    icon: IconVoice,
  },
  {
    type: 2,
    text: '字节拖动',
    key: '1',
    url: '/drag',
    title: '123',
    icon: IconMore,
    children: [
      {
        type: 3,
        text: '拖动现场',
        url: '/drag',
        key: '1_1',
        title: '123',
        icon: IconDragArrow,
      },
      {
        type: 3,
        text: '拖动历史',
        url: '/drag-history',
        key: '1_2',
        title: '123',
        icon: IconHistory,
      },
    ],
  },
]

const config: IMenu = {
  defaultOpenKeys: ['1'],
  defaultSelectedKeys: ['0_2'],
  menuList,
}

export default config
