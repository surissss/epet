/*
 触发mutation调用间接更新状态的对象
 */
import {
  reqHeaderMenus,
  reqImgslist,
  reqHotTypes,
  reqDailySale,
  reqAdvertImgs,
  reqBrands,
  reqTypesname,
  reqTypeslist,
  reqAllbrand
} from '../api'
import {
  RECEIVE_HEADERMENUS,
  RECEIVE_IMGSLIST,
  RECEIVE_HOTTYPES,
  RECEIVE_DAILYSALE,
  RECEIVE_ADVERTIMGS,
  RECEIVE_BRANDS,
  RECEIVE_TYPESNAME,
  RECEIVE_TYPESLIST,
  RECEIVE_ALLBRAND
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

  // 异步获取"图片轮播广告"数据
  async getImgsList({commit}, callback) {
    const result = await reqImgslist()
    if(result.code===0) {
      const imgsList = result.data
      commit(RECEIVE_IMGSLIST, {imgsList})
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

  // 异步获取每日惊喜模块数据
  async getDailySale({commit}, callback) {
    const result = await reqDailySale()
    if(result.code===0) {
      const dailySale = result.data
      commit(RECEIVE_DAILYSALE, {dailySale})
      callback && callback()
    }
  },

// 异步获取8个通用广告模板
 async getAdvertImgs({commit}, callback) {
   const result = await reqAdvertImgs()
   if(result.code===0) {
   const advertImgs = result.data
   //console.log("advertImgs",advertImgs)
   commit(RECEIVE_ADVERTIMGS, {advertImgs})
   callback && callback()
   }
 },

  // 获取品牌列表
  async getBrands({commit}, callback) {
    const result = await reqBrands()
    if(result.code===0) {
      const brands = result.data
      //console.log("brands",brands)
      commit(RECEIVE_BRANDS, {brands})
      callback && callback()
    }
  },
  // 获取分类标题列表
  async getTypesName({commit}, callback) {
    const result = await reqTypesname()
    if(result.code===0) {
      const typesName = result.data
      //console.log("typesName",typesName)
      commit(RECEIVE_TYPESNAME, {typesName})
      callback && callback()
    }
  },
  // 获取分类内容列表
  async getTypesList({commit}, callback) {
    const result = await reqTypeslist()
    if(result.code===0) {
      const typesList = result.data
      //console.log("typesList",typesList)
      commit(RECEIVE_TYPESLIST, {typesList})
      callback && callback()
    }
  },

  // 获取全部品牌列表
  async getAllBrand({commit}, callback) {
    const result = await reqAllbrand()
    if(result.code===0) {
      const allBrand = result.data
      //console.log("1232",allBrand)
      commit(RECEIVE_ALLBRAND, {allBrand})
      callback && callback()
    }
  },

  // 保存userInfo
  recordUserInfo ({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  // 异步获取用户信息
  async getUserInfo ({commit}) {
    const result = await reqUser()
    if(result.code===0) {
      commit(RECEIVE_USER_INFO, {userInfo: result.data})
    }
  },
}
