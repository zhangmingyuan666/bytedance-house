/*
 * @Author: Ming
 * @Date: 2022-06-03 18:12:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-04 00:37:46
 * @Description: 请填写简介
 */
import MingCard from '@/base-ui/card'
import { getAllHouseSource, getOnlyHouseSourceDetail } from '@/service/house-source/house-source'
import { useStores } from '@/store'
import { Select, Tag } from '@arco-design/web-react'
import { observer } from 'mobx-react-lite'
import * as React from 'react'
const Option = Select.Option
const HouseSourceChooser: React.FC = () => {
  const { dragStore } = useStores()
  const { setHouseSourceId, houseSourceId } = dragStore
  const [options, setOptions] = React.useState(() => [])
  const [tags, setTags] = React.useState({})

  React.useEffect(() => {
    async function getAllHouseSourceList() {
      const result = await getAllHouseSource()
      const { houseList } = result
      setOptions(houseList)
    }
    getAllHouseSourceList()
  }, [])

  const requesetHouseSourceDetail = async (id: string) => {
    setHouseSourceId.call(dragStore, id)
    const result = await getOnlyHouseSourceDetail(id)
    const { city_name, listing_name, pricing } = result.houseInfo
    setTags({ city_name, listing_name, pricing })
  }

  return (
    <div className="mt-4">
      <MingCard title="你想要选择的房源">
        <Select
          placeholder="房源"
          allowClear
          showSearch
          defaultValue={houseSourceId ?? ''}
          onChange={id => requesetHouseSourceDetail(id)}
        >
          {options.map((option: any) => (
            <Option key={option.id} value={option.id}>
              {option.listing_name}
            </Option>
          ))}
        </Select>
        <div className="mt-4">
          {Object.values(tags).map((key: any) => {
            return <Tag key={key}>{key}</Tag>
          })}
        </div>
      </MingCard>
    </div>
  )
}

export default observer(HouseSourceChooser)
