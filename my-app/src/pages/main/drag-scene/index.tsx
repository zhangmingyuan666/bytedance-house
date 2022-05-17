import * as React from 'react'
import { Divider } from '@arco-design/web-react'
import DragCanvas from '@/components/drag/drag-canvas'
import DragLeft from '@/components/drag/drag-left'
import DragRight from '@/components/drag/drag-right'

const MainDrag: React.FC = () => {
  return (
    <div className="h-1 w-1">
      <div className="space-between h-1 w-1">
        <DragLeft />
        <DragCanvas />
        <DragRight />
      </div>
    </div>
  )
}

export default MainDrag
