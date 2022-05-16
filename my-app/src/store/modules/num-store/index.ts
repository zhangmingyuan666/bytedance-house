import { makeAutoObservable } from 'mobx'

class NumNumNum {
  // 1.定义数据
  curNum = 0

  get translateCurNum() {
    return this.curNum + '哈哈哈哈哈'
  }

  // 2.响应式处理
  constructor() {
    makeAutoObservable(this)
  }

  // 3.定义 action 函数
  addNum = () => {
    console.log(this.curNum)
    this.curNum += 1
  }

  subNum = () => {
    this.curNum -= 1
  }

  chengNum = () => {
    this.curNum *= 2
  }

  chuNum = () => {
    this.curNum /= 2
  }

  // when1 = when(
  //   () => this.count > 10,
  //   () => {
  //     console.log(this.count)
  //   }
  // )(
  //   // when 方法还能返回一个 promise
  //   async function () {
  //     await when(() => this.count > 10)
  //     console.log('store.count > 10')
  //   }
  // )()

  // 第一个方法的返回值修改后才会调用后面的 effect
  // reaction1 = reaction(
  //   () => this.curNum,
  //   (curNum, prevNum) => {
  //     console.log('diff', curNum - prevNum)
  //   }
  // )
}

// 4.实例化并导出 store
const NumStore = new NumNumNum()

export default NumStore
