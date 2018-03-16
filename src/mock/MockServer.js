import Mock from 'mockjs'

import msite from './msite.json'
import brands from './brands.json'

/*
* 首页数据
* */
// 顶部导航栏数据
Mock.mock('/headermenus', {code: 0, data: msite.menus})

// 获取所有静态图片资源
const staticImgs = msite.datas.filter( item => item.type_name === "图片轮播广告")

// 获取首页大轮播的图片
const lunboImgs = staticImgs.filter( item => {
  return item.index === "3160" || item.index === "3171"
}).map(item => {
  return item.value
})
console.log("lunboImages",lunboImgs)
Mock.mock('/lunboimgs', {code: 0, data: lunboImgs})

// hotType 10个
const hotTypeMenus = msite.datas.filter( item => item.index === "3162")
Mock.mock('/hottypes', {code: 0, data: hotTypeMenus[0].menus})

// 获取除轮播图片以外的图片
const otherImgsObject = staticImgs.filter(item => {
  return item.index !== "3160" && item.index !== "3171"
})
const otherImgsArr = otherImgsObject.map(item => item.value[0].image)
Mock.mock('/otherimgs', {code: 0, data:otherImgsArr})

// 获取每日惊喜模块数据
const dailySale = msite.datas.filter( item => item.index === "3164")[0]
Mock.mock('/dailysale', {code: 0, data:dailySale})
console.log("otherImgs",dailySale)

// 获取通用广告模板数据
const advertImgs = msite.datas.filter( item => {
  return item.type_name === "通用广告模板"
}).map((item) => {
  return [item.content_images[0], item.content_images[1]]
})
console.log("fefsefsf",advertImgs)
Mock.mock('/advertimgs', {code: 0, data:advertImgs})

/*
* 分类页数据
* */
// 品牌数据
Mock.mock('/brands', {code: 0, data:brands.brand})
