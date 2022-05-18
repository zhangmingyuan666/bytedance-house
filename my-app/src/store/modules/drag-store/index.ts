/*
 * @Author: Ming
 * @Date: 2022-05-18 10:22:10
 * @LastEditors: Ming
 * @LastEditTime: 2022-05-18 23:38:49
 * @Description: 请填写简介
 */
import { makeAutoObservable } from 'mobx'
import { BASE_DRAG_EMPTY } from './default'
import { DragType, IDragElement, IPosition } from './type'
import { switchInitType } from './utils'
class Drag {
  currentDragEle: IDragElement = BASE_DRAG_EMPTY // 当前选择的 dragElemt
  resultDragList: IDragElement[] = [] // 所有的DragElment集合

  containerRefFn: any = null // 此处传入容器的Ref

  containerPosition: IPosition = {
    // 此处保存当前容器的位置
    x: 0,
    y: 0,
  }

  constructor() {
    makeAutoObservable(this)
  }

  //此处是设置canvas的函数
  setContainerRefFn = (fn: any) => {
    this.containerRefFn = fn
  }
  // 设置container的posixion
  setContainerPosition = (position: IPosition) => {
    this.containerPosition = { ...position }
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

  dragDownElement = (left: string | number, top: string | number, type: DragType) => {
    let nowConfig = switchInitType(type)
    const config: IDragElement = {
      ...nowConfig,
      type,
      left,
      top,
      id: +new Date() + '',
    }

    //将这个节点的所有信息设置在当前的config上
    this.setDragElementConfig(config)
    //将这个节点加入res数组
    this.addResElement()
    //获取这个结点
    this.getExactDragElement(config.id)
  }

  dragDownExistElement = (left: number | string, top: number | string) => {
    const config = {
      ...this.currentDragEle,
      left,
      top,
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

  removeExactDragElement = (id: string, isDelete: boolean = false) => {
    console.log(id)
    this.getExactDragElement(id)
    //把当前节点从dragEle中删掉
    this.resultDragList = this.resultDragList.filter(dragElement => dragElement.id !== id)
    if (isDelete) {
      this.currentDragEle = BASE_DRAG_EMPTY
    }
  }

  editDragElement = (config: IDragElement) => {
    this.setDragElementConfig(config)
    const { id } = this.currentDragEle

    // 如果没有id不进行编辑
    if (!id) {
      return
    }
    let tmpObj = { ...this.currentDragEle }
    //把这一个节点清除掉
    this.removeExactDragElement(id)
    this.currentDragEle = { ...tmpObj }
    this.addResElement()
  }
}

// 将实例导出
export default new Drag()
