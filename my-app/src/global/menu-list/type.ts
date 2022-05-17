export interface IMenu {
  defaultOpenKeys: string[] //默认打开的一级菜单
  defaultSelectedKeys: string[] // 默认进入的页面,
  menuList: IMenuList[]
}

export interface IMenuList {
  type: number //type为1，一级菜单，type为2，二级菜单
  text: string //内容
  key: string //用于设置默认点击
  url?: string //页面跳转
  title?: any //title为标题，一级标题专有
  icon?: any //icon 可有可无,
  children?: IMenuList[]
}
