/*
 * @Author: Ming
 * @Date: 2022-05-17 23:08:23
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 20:29:24
 * @Description: 请填写简介
 */
import * as React from 'react'
import { Card } from '@arco-design/web-react'

type AppProps = {
  children: React.ReactNode
  title: string
}

const MingCard: React.FC<AppProps> = ({ children, title }) => {
  return (
    <div>
      <Card
        title={title}
        className="card-custom-hover-style mb-4"
        hoverable
        style={{ position: 'static' }}
      >
        {children}
      </Card>
    </div>
  )
}

export default MingCard
