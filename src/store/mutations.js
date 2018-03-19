/*
 直接操作state的对象
 */
import Vue from 'vue'
import {
  RECEIVE_HEADERMENUS,
  RECEIVE_HOTTYPES,
  RECEIVE_IMGSLIST,
  RECEIVE_DAILYSALE,
  RECEIVE_ADVERTIMGS,
  RECEIVE_BRANDS,
  RECEIVE_TYPESNAME,
  RECEIVE_TYPESLIST,
  RECEIVE_USER_INFO,
  RECEIVE_ALLBRAND
} from './mutation-types'

export default {
  [RECEIVE_HEADERMENUS] (state, {headerMenus}) {
    state.msiteData.headerMenus = headerMenus
  },
  [RECEIVE_IMGSLIST] (state, {imgsList}) {
    state.msiteData.imgsList = imgsList
  },
  [RECEIVE_HOTTYPES] (state, {hotTypes}) {
    state.msiteData.hotTypes = hotTypes
  },
  [RECEIVE_DAILYSALE] (state, {dailySale}) {
    state.msiteData.dailySale = dailySale
  },
  [RECEIVE_ADVERTIMGS] (state, {advertImgs}) {
    state.msiteData.advertImgs = advertImgs
  },
  [RECEIVE_BRANDS] (state, {brands}) {
    state.brands = brands
  },
  [RECEIVE_TYPESNAME] (state, {typesName}) {
    state.typesName = typesName
  },
  [RECEIVE_TYPESLIST] (state, {typesList}) {
    state.typesList = typesList
  },
  [RECEIVE_ALLBRAND] (state, {allBrand}) {
    state.allBrand = allBrand
  },
  [RECEIVE_USER_INFO](state, {userInfo}) {
    state.userInfo = userInfo
  },
}
