/*
 * @Author: Ming
 * @Date: 2022-05-16 15:48:32
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 23:38:28
 * @Description: 请填写简介
 */
import * as React from 'react'
import { useState } from 'react'
import { Layout } from '@arco-design/web-react'
import { Outlet } from 'react-router-dom'
import MainSider from '@/components/main/main-sider'
import MainHeader from '@/components/main/main-header'
//import MainFooter from '@/components/main/main-footer'

//一些common
const Sider = Layout.Sider
const Header = Layout.Header
//const Footer = Layout.Footer
const Content = Layout.Content

const Main: React.FC = () => {
  const [collapsed, handleCollapsed] = useState(false)

  const triggerCollapsed = (e: Event) => {
    handleCollapsed(!collapsed)
  }

  return (
    <div className="w-full h-full">
      <Layout className="layout-collapse-demo h-full">
        <Sider collapsed={collapsed} collapsible trigger={null} breakpoint="xl">
          <MainSider />
        </Sider>
        <div className="w-full">
          <Layout>
            <Header>
              <MainHeader collapsed={collapsed} changeCollapsed={e => triggerCollapsed(e)} />
            </Header>
            <Layout>
              <Content>
                <div className="m-4">
                  <Outlet></Outlet>
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </Layout>
    </div>
  )
}

export default Main
