import * as React from 'react'
import DragCanvas from '@/components/drag/drag-canvas'
import DragLeft from '@/components/drag/drag-left'
import DragRight from '@/components/drag/drag-right'

const MainDrag: React.FC = () => {
  return (
    <div className="space-between">
      <DragLeft />
      <DragCanvas />
      <DragRight />
    </div>
  )
}

export default MainDrag
