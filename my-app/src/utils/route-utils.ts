import menuConfig from '@/global/menu-list'
import { IMenu, IMenuList } from '@/global/menu-list/type'

// 通过当前页面的url，来找到对应的key和
export const findMenuByUrl = (url: string) => {
  const { menuList } = menuConfig
  const urlArr: string[] = url.split('/')
  const targetURL: string = '/' + urlArr[urlArr.length - 1]
  let result: string[] = []
  _recurseMenuList(menuList)

  function _recurseMenuList(menuList: IMenuList[]) {
    for (const MenuChild of menuList) {
      if (MenuChild.children) {
        _recurseMenuList(MenuChild.children)
      } else {
        if (targetURL === MenuChild.url) {
          result.push(MenuChild.key)
        }
      }
    }
  }

  //如果找到了，就用新的
  //入股没找到就用默认的
  return result.length === 1 ? result : menuConfig.defaultSelectedKeys
}
