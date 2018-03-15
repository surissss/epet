/*
 直接操作state的对象
 */
import Vue from 'vue'
import {
  RECEIVE_HEADERMENUS,
  RECEIVE_HOTTYPES,
  RECEIVE_LUNBOIMGS,
  RECEIVE_OTHERIMGS,
  RECEIVE_DAILYSALE
} from './mutation-types'

export default {
  [RECEIVE_HEADERMENUS](state, {headerMenus}) {
    state.msiteData.headerMenus = headerMenus
    console.log("1134",state.msiteData.headerMenus)
  },
  [RECEIVE_LUNBOIMGS](state, {lunboImgs}) {
    state.msiteData.lunboImgs = lunboImgs
  },
  [RECEIVE_HOTTYPES](state, {hotTypes}) {
    state.msiteData.hotTypes = hotTypes
  },
  [RECEIVE_OTHERIMGS](state, {otherImgs}) {
    state.msiteData.otherImgs = otherImgs
  },
  [RECEIVE_DAILYSALE](state, {dailySale}) {
    state.msiteData.dailySale = dailySale
  }
}
