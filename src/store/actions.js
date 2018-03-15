/*
 触发mutation调用间接更新状态的对象
 */
import {
  reqHeaderMenus,
  reqHotTypes,
  reqLunboImgs,
  reqOtherImgs,
  reqDailySale
} from '../api'
import {
  RECEIVE_HEADERMENUS,
  RECEIVE_LUNBOIMGS,
  RECEIVE_HOTTYPES,
  RECEIVE_OTHERIMGS,
  RECEIVE_DAILYSALE
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
    if(result.code===0) {
      const headerMenus = result.data
      commit(RECEIVE_HEADERMENUS, {headerMenus})
      callback && callback()
    }
  },

  // 异步获取顶部图片轮播数据
  async getLunboImgs({commit}, callback) {
    const result = await reqLunboImgs()
    if(result.code===0) {
      const lunboImgs = result.data
      commit(RECEIVE_LUNBOIMGS, {lunboImgs})
      callback && callback()
    }
  },

  // 异步获取中部图标导航菜单数据
  async getHotTypes({commit}, callback) {
    const result = await reqHotTypes()
    if(result.code===0) {
      const hotTypes = result.data
      commit(RECEIVE_HOTTYPES, {hotTypes})
      callback && callback()
    }
  },

  // 异步获取除去轮播以外的所有静态图片
  async getOtherImags({commit}, callback) {
    const result = await reqOtherImgs()
    if(result.code===0) {
      const otherImgs = result.data
      commit(RECEIVE_OTHERIMGS, {otherImgs})
      callback && callback()
    }
  },

  // 异步获取每日惊喜模块数据
  async getDailySale({commit}, callback) {
    const result = await reqDailySale()
    if(result.code===0) {
      const dailySale = result.data
      commit(RECEIVE_DAILYSALE, {dailySale})
      callback && callback()
    }
  },
}
