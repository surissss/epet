/*
 触发mutation调用间接更新状态的对象
 */
import {
  reqHeaderMenus
} from '../api'
import {
  RECEIVE_HEADERMENUS,
} from './mutation-types'
/*
 使用async和await的作用:
 1. 使用同步编码的方式实现异步的效果
 2. 包装promise, 简洁化编码
 用法
 1. 加await: 在返回promise对象的函数调用的左边
 2. 加async: 在await所在的函数定义的左边
 */
export default {

  // 异步获取顶部导航菜单数据
  async getHeaderMenus({commit}, callback) {
    const result = await reqHeaderMenus()
    console.log(result)
    if(result.code===0) {
      const headerMenus = result.data
      commit(RECEIVE_HEADERMENUS, {headerMenus})
      callback && callback()
    }
  },
}
