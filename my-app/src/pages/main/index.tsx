import * as React from 'react'
import { useState } from 'react'
import { Layout } from '@arco-design/web-react'
import { Outlet } from 'react-router-dom'
import MainSider from '@/components/main/main-sider'
import MainHeader from '@/components/main/main-header'
import MainFooter from '@/components/main/main-footer'

//一些common
const Sider = Layout.Sider
const Header = Layout.Header
const Footer = Layout.Footer
const Content = Layout.Content

const Main: React.FC = () => {
  const [collapsed, handleCollapsed] = useState(false)

  const triggerCollapsed = (e: Event) => {
    handleCollapsed(!collapsed)
  }

  return (
    <div className="w-1 h-1 flex-center">
      <Layout className="layout-collapse-demo w-1 h-1">
        <Sider collapsed={collapsed} collapsible trigger={null} breakpoint="xl">
          <MainSider />
        </Sider>
        <div className="w-1">
          <Layout>
            <Header>
              <MainHeader collapsed={collapsed} changeCollapsed={e => triggerCollapsed(e)} />
            </Header>
            <Layout>
              <Content>
                <Outlet></Outlet>
              </Content>
            </Layout>
          </Layout>
        </div>
      </Layout>
    </div>
  )
}

export default Main
