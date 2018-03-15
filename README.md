仿E宠商城项目（vue实现）
=======
#epet 仿E宠商城项目

## 第一天 03.14

### 进度
* 完成顶部下载广告及导航的html/css/js部分
  * 导航列表的数据通过mock动态获取
  * 导航的左右滑动使用实现better-scroll

### 问题
* 内联元素内部嵌套别的元素时，如果想要内外完全重合，必须给外部的内联元素设置display:block，否则外部的内联元素总会在底部多出一点点
* better-scroll默认滚动方向是scrollY，如果想要水平滚动必须设置scrollX:true


>>>>>>>


## 第二天 03.15

### 进度
* 完成首页大部分静态页面及数据展示部分

### 问题
* 数据
  * 从网站直接复制的json数据过于复杂，想要获得具体的某一类数据可以使用数组的filter/map方法先对数据处理后再使用mock模拟数据
  ```javascript
    //获取每日惊喜模块数据
    const dailySale = msite.datas.filter( item => item.index === "3164")[0]
    Mock.mock('/dailysale', {code: 0, data:dailySale})
  ```
  * 使用better-scroll时必须将内容区放在一个不定高的容器内，然后外层容器高度固定，才能让内容区实现滚动
  * 数据更新后，页面重新渲染：
    * 在mounted中使用this.$nextTick()回调可以使页面在数据更新后才渲染
    * 使用watch监视变化的数据达不到一样的效果，不知道为啥


