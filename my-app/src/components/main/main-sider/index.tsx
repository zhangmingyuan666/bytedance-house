import * as React from 'react'
import { Menu, Message } from '@arco-design/web-react'
import { IconBytedanceColor } from '@arco-design/web-react/icon'
import menuConfig from '@/global/menu-list'
import { useNavigate } from 'react-router-dom'

const MenuItem = Menu.Item
const SubMenu = Menu.SubMenu

const MainSider: React.FC = () => {
  const { defaultOpenKeys, defaultSelectedKeys, menuList } = menuConfig
  const navigate = useNavigate()
  const handleNavigate = (url: string) => {
    console.log(url)
    navigate('/main' + url)
  }
  //此处渲染menu
  return (
    <div>
      <Menu
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
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
              <MenuItem key={key} onClick={() => handleNavigate(url!)}>
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
                    <MenuItem key={key} onClick={() => handleNavigate(url!)}>
                      <Icon />
                      {text}
                    </MenuItem>
                  )
                })}
              </SubMenu>
            )
          } else {
            throw Error('type error')
          }
        })}
      </Menu>
    </div>
  )
}

export default MainSider
