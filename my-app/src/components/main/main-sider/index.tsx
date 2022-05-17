import * as React from 'react'
import { Menu, Message } from '@arco-design/web-react'
import { IconBytedanceColor } from '@arco-design/web-react/icon'
import menuConfig from '@/global/menu-list'
import useRouter from '@/hooks/navigate-hooks'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

const MainSider: React.FC = () => {
  const config = { ...menuConfig }
  // 此处是基本的配置
  const { defaultOpenKeys, menuList } = config
  const [routerTo, getDefaultSelectedKeys] = useRouter('/main')
  // 在此处找到默认的key
  const key = getDefaultSelectedKeys()
  //此处渲染menu
  return (
    <div>
      <Menu
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={key}
        onClickMenuItem={key => Message.info({ content: `You select ${key}`, showIcon: true })}
        style={{ width: '100%' }}
      >
        <MenuItem key="logo" disabled>
          <IconBytedanceColor></IconBytedanceColor>
          '广深group'
        </MenuItem>
        {menuList.map(listItem => {
          const { type, icon: Icon, text, key, url } = listItem
          if (type === 1) {
            return (
              <MenuItem key={key} onClick={() => routerTo(url!)}>
                <Icon></Icon>
                {text}
              </MenuItem>
            )
          } else if (type === 2) {
            return (
              <SubMenu
                key={key}
                title={
                  <span>
                    <Icon />
                    {text}
                  </span>
                }
              >
                {listItem.children?.map(listChild => {
                  const { icon: Icon, key, text, url } = listChild
                  return (
                    <MenuItem key={key} onClick={() => routerTo(url!)}>
                      <Icon />
                      {text}
                    </MenuItem>
                  )
                })}
              </SubMenu>
            )
          } else {
            throw Error('menu type error')
          }
        })}
      </Menu>
    </div>
  )
}

export default MainSider
