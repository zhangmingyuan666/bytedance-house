/*
 * @Author: Ming
 * @Date: 2022-05-18 10:22:10
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-24 13:36:29
 * @Description: 请填写简介
 */
import { makeAutoObservable, observable } from 'mobx'
import { BASE_DRAG_EMPTY } from './default'
import { DragType, IDragElement, IPosition } from './type'
import { switchInitType, connectNearestMap, deleteNearestMap } from './utils'
import { transformPositionPercentToPx, transformPositionPxToPercent } from '@/utils/common'
import { nanoid } from 'nanoid'
import { BORDER_SIZE } from '@/global/default/drag/default'

class Drag {
  currentDragEle: IDragElement = BASE_DRAG_EMPTY // 当前选择的 dragElemt
  resultDragList: IDragElement[] = [] // 所有的DragElment集合
  containerRefFn: any = null // 此处传入容器的Ref
  containerRefSize: IPosition = {
    x: 500,
    y: 500,
  }
  containerPosition: IPosition = {
    // 此处保存当前容器的位置
    x: 0,
    y: 0,
  }

  leftMap = observable(new Map<number, number>()) // 维护left的哈希表
  topMap = observable(new Map<number, number>()) // 维护top的哈希表

  constructor() {
    makeAutoObservable(this)
  }

  get getPositionPercentToNumber() {
    const { width, height, left, top } = this.currentDragEle
    console.log(width, height, left, top)
    return {
      width: +width.split('%')[0],
      height: +height.split('%')[0],
      left: +left.split('%')[0],
      top: +top.split('%')[0],
    }
  }

  //此处是设置canvas的函数
  setContainerRefFn = (fn: any) => {
    this.containerRefFn = fn
  }
  // 设置container的posixion
  setContainerPosition = (position: IPosition) => {
    this.containerPosition = { ...position }
  }

  setContainerRefSize = (height: number) => {
    this.containerRefSize.y = height
  }

  initDragElementConfig = () => {
    this.setDragElementConfig(BASE_DRAG_EMPTY)
  }
  //设置属性
  //一次设置所有
  setDragElementConfig = (config: IDragElement) => {
    this.currentDragEle = { ...config }
  }

  //渲染成功，将当前列表push进
  addResElement = () => {
    this.resultDragList.push(this.currentDragEle)
    //this.curDragElement = DRAG_DEFAULT.BASE_DRAG_EMPTY_ELEMENT
  }

  // 放下一个新的element
  dragDownElement = (left: number, top: number, type: DragType) => {
    let nowConfig = switchInitType(type)
    const leftPercent = connectNearestMap(
      this.leftMap,
      +transformPositionPxToPercent(this.containerRefSize.x, left).split('%')[0],
      3
    )
    const topPercent = connectNearestMap(
      this.topMap,
      +transformPositionPxToPercent(this.containerRefSize.y, top).split('%')[0],
      3
    )
    const config: IDragElement = {
      ...nowConfig,
      type,
      left: leftPercent,
      top: topPercent,
      id: nanoid(),
    }

    //将这个节点的所有信息设置在当前的config上
    this.setDragElementConfig(config)
    //将这个节点加入res数组
    this.addResElement()
    //获取这个结点
    this.getExactDragElement(config.id)
  }

  // 放下一个已经存在的element
  dragDownExistElement = (left: number, top: number) => {
    const leftPercent = connectNearestMap(
      this.leftMap,
      +transformPositionPxToPercent(this.containerRefSize.x, left).split('%')[0],
      3
    )
    const topPercent = connectNearestMap(
      this.topMap,
      +transformPositionPxToPercent(this.containerRefSize.y, top).split('%')[0],
      3
    )
    const config = {
      ...this.currentDragEle,
      left: leftPercent,
      top: topPercent,
    }

    this.setDragElementConfig(config)
    this.addResElement()
    this.getExactDragElement(config.id)
  }

  //点击某一节点，获取该结点的所有数据，放到curDragElement里
  getExactDragElement = (id: string) => {
    let result = this.resultDragList.find(dragElement => dragElement.id === id)
    console.log(result)
    // 为啥使用类型断言？ 因为一定能找到
    this.currentDragEle = { ...result! }
  }

  /**
   * @description:
   * @param id: 用于传递当前dragEle的id
   * @param isDelete? :可选，用于判断是编辑还是删除
   * @return {*}
   */
  removeExactDragElement = (id: string, isDelete: boolean = false) => {
    console.log(id)
    this.getExactDragElement(id)
    const { left, top } = this.currentDragEle
    deleteNearestMap(this.leftMap, +left.split('%')[0], 10)
    deleteNearestMap(this.topMap, +top.split('%')[0], 10)
    //把当前节点从dragEle中删掉

    this.resultDragList = this.resultDragList.filter(dragElement => dragElement.id !== id)

    // 如果是删除，需要清空当前的输入框
    if (isDelete) {
      this.currentDragEle = BASE_DRAG_EMPTY
    }
  }

  /**
   * @description: 用于编辑一个已经配置好的表单（通过表单项）
   * @param config : 一个已经配置好的表单
   * @return {*}
   */
  editDragElement = (config: IDragElement) => {
    if (!config.id) {
      console.log('没有id无法编辑')
      return
    }
    this.setDragElementConfig(config)
    const { id } = this.currentDragEle
    let tmpObj = { ...this.currentDragEle }
    //把这一个节点清除掉
    this.removeExactDragElement(id)
    this.currentDragEle = { ...tmpObj }
    const { left, top } = this.currentDragEle
    connectNearestMap(this.leftMap, +left.split('%')[0], 10)
    connectNearestMap(this.topMap, +top.split('%')[0], 10)
    this.addResElement()
  }
}

// 将实例导出
export default new Drag()
