/*
* 当前项目接口Ajax请求模块
* */
import ajax from './ajax'

//获取顶部导航菜单数据
export const reqHeaderMenus = () => ajax('/headermenus')
