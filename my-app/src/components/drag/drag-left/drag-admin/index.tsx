/*
 * @Author: Ming
 * @Date: 2022-05-17 15:48:25
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-22 23:27:30
 * @Description: 请填写简介
 */
import * as React from 'react'
import { Tree, Empty } from '@arco-design/web-react'
import MingCard from '@/base-ui/card'
import { observer } from 'mobx-react-lite'
import { useStores } from '@/store'
import { IDragElement } from '@/store/modules/drag-store/type'
const TreeNode = Tree.Node

const DragAdmin: React.FC = () => {
  const stores = useStores()
  const { dragStore } = stores
  const finalTree: IDragElement[] = [...dragStore.resultDragList]
  return (
    <div>
      <MingCard title={'组件List'}>
        <div style={{ maxHeight: '250px', overflow: 'auto' }}>
          {dragStore.resultDragList.length === 0 ? (
            <Empty></Empty>
          ) : (
            <Tree
              blockNode
              onSelect={(e: any) => {
                dragStore.getExactDragElement(e[0])
              }}
            >
              {finalTree.map((treeChild: IDragElement) => {
                const { id, type, name } = treeChild
                return name ? (
                  <TreeNode title={name} key={id}></TreeNode>
                ) : (
                  <TreeNode title={type} key={id}></TreeNode>
                )
              })}
            </Tree>
          )}
        </div>
      </MingCard>
    </div>
  )
}

export default observer(DragAdmin)
