/*
 * @Author: Ming
 * @Date: 2022-05-16 23:23:23
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-05 12:35:27
 * @Description: 请填写简介
 */
import { useStores } from '@/store'
import { observer } from 'mobx-react-lite'
import { List } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'
import * as React from 'react'


const MainDragHistory: React.FC = () => {
  const store = useStores()
  const navigate = useNavigate()
  const { getDragHistoryListAction, dragHistoryList, jumpToHistoryDetail } = store.dragStore
  console.log(dragHistoryList)
  React.useEffect(() => {
    getDragHistoryListAction()
  }, [dragHistoryList.length])

  const clickToGetDetail = async (id: string) => {
    await jumpToHistoryDetail(id)
    navigate('/main/drag')
  }

  return (
    <div className="p-4">
      <List
        dataSource={dragHistoryList}
        render={(item, index) => (
          <List.Item key={index}>
            <div onClick={() => clickToGetDetail(item.jsonId)}>{item.jsonName}</div>
          </List.Item>
        )}
      ></List>
    </div>
  )
}

export default observer(MainDragHistory)
