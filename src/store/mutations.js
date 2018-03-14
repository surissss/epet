/*
 直接操作state的对象
 */
import Vue from 'vue'
import {
  RECEIVE_HEADERMENUS
} from './mutation-types'

export default {
  [RECEIVE_HEADERMENUS](state, {headerMenus}) {
    state.headerMenus = headerMenus
  }
}
