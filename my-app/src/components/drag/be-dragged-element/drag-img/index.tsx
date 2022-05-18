import { Image } from '@arco-design/web-react'
import * as React from 'react'

type AppProps = {
  id: string
  src: string
  width: string
  height: string
  style: any
}

const DragImage: React.FC<AppProps> = ({
  id = '',
  src = 'https://v3.cn.vuejs.org/images/sponsors/html_burger.png',
  width = '100%',
  height = '50px',
  style,
}) => {
  let MyImageRef = React.useRef<HTMLDivElement>(null)
  return (
    <div ref={MyImageRef} style={{ width, height, ...style }}>
      <Image src={src} alt="I LOVE ELC" className="w-full h-full" draggable="true"></Image>
    </div>
  )
}

export default DragImage
