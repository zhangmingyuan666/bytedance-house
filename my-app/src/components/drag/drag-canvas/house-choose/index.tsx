/*
 * @Author: Ming
 * @Date: 2022-06-03 18:12:55
 * @LastEditors: Ming
 * @LastEditTime: 2022-06-03 18:34:40
 * @Description: 请填写简介
 */
import MingCard from '@/base-ui/card'
import { getAllHouseSource } from '@/service/house-source/house-source'
import { Select } from '@arco-design/web-react'
import * as React from 'react'
const Option = Select.Option
const HouseSourceChooser: React.FC = () => {
  const [options, setOptions] = React.useState(() => [])

  React.useEffect(() => {
    async function getAllHouseSourceList() {
      const result = await getAllHouseSource()
      const { houseList } = result
      setOptions(houseList)
    }
    getAllHouseSourceList()
  }, [])
  return (
    <div className="mt-4">
      <MingCard title="你想要选择的房源">
        <Select placeholder="房源" allowClear showSearch>
          {options.map((option: any, index) => (
            <Option key={option.id} value={option.listing_name}>
              {option.listing_name}
            </Option>
          ))}
        </Select>
      </MingCard>
    </div>
  )
}

export default HouseSourceChooser
