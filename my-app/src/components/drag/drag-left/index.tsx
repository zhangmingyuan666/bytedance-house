import * as React from 'react'
import DragAdmin from './drag-admin'
import DragArea from './drag-area'
const DragLeft: React.FC = () => {
  return (
    <div className="flex-1" style={{ minWidth: '150px' }}>
      <DragAdmin />
      <DragArea />
    </div>
  )
}

export default DragLeft
