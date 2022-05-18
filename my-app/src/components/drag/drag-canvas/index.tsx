import * as React from 'react'
import { observer } from 'mobx-react-lite'
import './index.css'
import { useStores } from '@/store'

const DragCanvas: React.FC = () => {
  const store = useStores()
  const canvasRef = React.useRef<HTMLDivElement | null>(null)

  // 在canvas节点挂载之后，将这个函数传到mobx中
  React.useEffect(() => {
    const getPosition = () => {
      const { offsetLeft: x, offsetTop: y } = canvasRef.current!
      store.dragStore.setContainerPosition({ x, y })
      console.log(x, y)
    }
    //getPosition()
    store.dragStore.setContainerRefFn(getPosition)
  }, [])

  return <div className="drag-canvas mx-4" ref={canvasRef}></div>
}

export default observer(DragCanvas)
