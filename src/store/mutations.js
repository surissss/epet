/*
 直接操作state的对象
 */
import Vue from 'vue'
import {
  RECEIVE_HEADERMENUS,
  RECEIVE_HOTTYPES,
  RECEIVE_LUNBOIMGS,
  RECEIVE_OTHERIMGS,
  RECEIVE_DAILYSALE,
  RECEIVE_ADVERTIMGS,
  RECEIVE_COMMONIMGS
} from './mutation-types'

export default {
  [RECEIVE_HEADERMENUS](state, {headerMenus}) {
    state.msiteData.headerMenus = headerMenus
  },
  [RECEIVE_LUNBOIMGS](state, {lunboImgs}) {
    state.msiteData.lunboImgs = lunboImgs
    console.log("轮播哈哈哈哈",state.msiteData.lunboImgs)
  },
  [RECEIVE_HOTTYPES](state, {hotTypes}) {
    state.msiteData.hotTypes = hotTypes
  },
  [RECEIVE_OTHERIMGS](state, {otherImgs}) {
    state.msiteData.otherImgs = otherImgs
  },
  [RECEIVE_DAILYSALE](state, {dailySale}) {
    state.msiteData.dailySale = dailySale
  },
  [RECEIVE_ADVERTIMGS](state, {advertImgs}) {
    state.msiteData.advertImgs = advertImgs
  },
  [RECEIVE_COMMONIMGS](state, {commonImgs}) {
    state.msiteData.commonImgs = commonImgs
  }
}
