import * as React from 'react'
import { Card } from '@arco-design/web-react'

type AppProps = {
  children: React.ReactNode
  title: string
}

const MingCard: React.FC<AppProps> = ({ children, title }) => {
  return (
    <div>
      <Card title={title} className="card-custom-hover-style mb-4" hoverable>
        {children}
      </Card>
    </div>
  )
}

export default MingCard
