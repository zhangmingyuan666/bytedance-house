import * as React from 'react'
import DragController from './drag-controller'
import DragJSON from './drag-json'

const DragRight: React.FC = () => {
  return (
    <div className="flex-1" style={{ minWidth: '300px' }}>
      <DragController />
      <DragJSON />
    </div>
  )
}

export default DragRight
