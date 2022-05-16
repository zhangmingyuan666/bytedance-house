import * as React from 'react'
import { IconHome, IconCalendar, IconCaretLeft, IconCaretRight } from '@arco-design/web-react/icon'
import { Layout, Menu, Breadcrumb, Message, Button } from '@arco-design/web-react'
const Header = Layout.Header

type AppProps = {
  collapsed: boolean
  changeCollapsed: (e: Event) => void
}

const MainHeader: React.FC<AppProps> = ({ collapsed, changeCollapsed }) => {
  return (
    <div>
      <Button
        shape="round"
        className="trigger "
        onClick={e => changeCollapsed(e)}
        style={{ margin: '5px 10px' }}
      >
        {collapsed ? <IconCaretRight /> : <IconCaretLeft />}
      </Button>
    </div>
  )
}

export default MainHeader
