import * as React from 'react'
import { Tree } from '@arco-design/web-react'
import MingCard from '@/base-ui/card'
const TreeNode = Tree.Node

const DragAdmin: React.FC = () => {
  const finalTree = [
    {
      title: 'aaa',
      key: '0-1',
    },
    {
      title: 'aaa',
      key: '0-2',
    },
    {
      title: 'aaa',
      key: '0-3',
    },
    {
      title: 'aaa',
      key: '0-4',
    },
    {
      title: 'aaa',
      key: '0-5',
    },
  ]
  return (
    <div>
      <MingCard title={'组件List'}>
        <Tree blockNode>
          {finalTree.map(treeChild => {
            const { title, key } = treeChild
            return <TreeNode title={title} key={key}></TreeNode>
          })}
        </Tree>
      </MingCard>
    </div>
  )
}

export default DragAdmin
