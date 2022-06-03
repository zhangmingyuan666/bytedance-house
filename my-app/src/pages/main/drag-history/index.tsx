/*
 * @Author: Ming
 * @Date: 2022-05-16 23:23:23
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 00:34:00
 * @Description: 请填写简介
 */
import { useStores } from '@/store'
import { observer } from 'mobx-react-lite'
import { List } from '@arco-design/web-react'

import * as React from 'react'

const MainDragHistory: React.FC = () => {
  const store = useStores()
  const { getDragHistoryListAction, dragHistoryList, jumpToHistoryDetail } = store.dragStore
  console.log(dragHistoryList)
  React.useEffect(() => {
    getDragHistoryListAction()
  }, [dragHistoryList.length])

  return (
    <div className="p-4">
      <List
        dataSource={dragHistoryList}
        render={(item, index) => (
          <List.Item key={index}>
            <div onClick={() => jumpToHistoryDetail(item.jsonId)}>{item.jsonName}</div>
          </List.Item>
        )}
      ></List>
    </div>
  )
}

export default observer(MainDragHistory)
