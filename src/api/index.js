/*
* 当前项目接口Ajax请求模块
* */
import ajax from './ajax'

// 获取顶部导航菜单数据
export const reqHeaderMenus = () => ajax('/headermenus')

// 获取内容区所有的静态图片
export const reqImgslist = () => ajax('/imgslist')
/*export const reqOtherImgs = () => ajax('/otherimgs')
// 获取轮播图片数据
export const reqLunboImgs = () => ajax('/lunboimgs')*/

// 获取热门活动10个小菜单数据
export const reqHotTypes = () => ajax('/hottypes')
// 获取每日惊喜模块数据
export const reqDailySale = () => ajax('/dailysale')
// 获取8个通用广告模板图片
export const reqAdvertImgs = () => ajax('/advertimgs')


// 获取分类品牌列表
export const reqBrands = () => ajax('/brands')
// 获取分类标题列表
export const reqTypesname = () => ajax('/typesname')
// 获取分类内容列表
export const reqTypeslist = () => ajax('/typeslist')
// 获取全部品牌列表
export const reqAllbrand = () => ajax('/allbrand')


// 获取一次性验证码
export const reqCaptcha = () => ajax('/api/captcha')
// 用户名密码登录
export const pwdLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST')
// 发送短信验证码
export const sendCode = (phone) => ajax('/api/sendcode', {phone})
// 手机号验证码登录
export const smsLogin = ({phone, code}) => ajax('/api/login_sms', {phone, code}, 'POST')
// 根据会话获取用户信息
export const reqUser = () => ajax('/api/userinfo')
