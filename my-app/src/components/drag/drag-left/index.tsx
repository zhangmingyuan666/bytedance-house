import * as React from 'react'
import DragAdmin from './drag-admin'
import DragArea from './drag-area'
const DragLeft: React.FC = () => {
  return (
    <div className="h-1">
      <DragAdmin />
      <DragArea />
    </div>
  )
}

export default DragLeft
