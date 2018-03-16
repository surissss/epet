/*
 触发mutation调用间接更新状态的对象
 */
import {
  reqHeaderMenus,
  reqHotTypes,
  reqLunboImgs,
  reqOtherImgs,
  reqDailySale,
  reqAdvertImgs,
  reqBrands
} from '../api'
import {
  RECEIVE_HEADERMENUS,
  RECEIVE_LUNBOIMGS,
  RECEIVE_HOTTYPES,
  RECEIVE_OTHERIMGS,
  RECEIVE_DAILYSALE,
  RECEIVE_ADVERTIMGS,
  RECEIVE_COMMONIMGS,
  RECEIVE_BRANDS
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

  // 异步图片轮播数据
  async getLunboImgs({commit}, callback) {
    const result = await reqLunboImgs()
    console.log("轮播",result)
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

  // 异步获取5个活动列表数据
  async getAdvertImgs({commit}, callback) {
    const result = await reqAdvertImgs()
    if(result.code===0) {
      const advertImgs = result.data.slice(1,6)
      console.log("advertImgs",advertImgs)
      commit(RECEIVE_ADVERTIMGS, {advertImgs})
      callback && callback()
    }
  },

  // 获取3个广告列表数据
  async getCommonImgs({commit}, callback) {
    const result = await reqAdvertImgs()
    if(result.code===0) {
      const commonImgs = result.data.filter((item,index) => {
        return index ===0 || index >5
      })
      console.log("commonImgs",commonImgs)
      commit(RECEIVE_COMMONIMGS, {commonImgs})
      callback && callback()
    }
  },

  // 获取3个广告列表数据
  async getBrands({commit}, callback) {
    const result = await reqBrands()
    if(result.code===0) {
      const brands = result.data
      console.log("brands",brands)
      commit(RECEIVE_BRANDS, {brands})
      callback && callback()
    }
  }
}
