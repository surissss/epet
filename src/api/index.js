/*
* 当前项目接口Ajax请求模块
* */
import ajax from './ajax'

//获取顶部导航菜单数据
export const reqHeaderMenus = () => ajax('/headermenus')

//获取首页轮播图片数据
export const reqLunboImgs = () => ajax('/lunboimgs')

//获取热门活动10个小菜单数据
export const reqHotTypes = () => ajax('/hottypes')

//获取内容区所有的静态图片
export const reqOtherImgs = () => ajax('/otherimgs')

//获取每日惊喜模块数据
export const reqDailySale = () => ajax('/dailysale')

//获取通用广告模板图片
export const reqAdvertImgs = () => ajax('/advertimgs')
