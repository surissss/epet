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
    // 获取每日惊喜模块数据
    const dailySale = msite.datas.filter( item => item.index === "3164")[0]
    Mock.mock('/dailysale', {code: 0, data:dailySale})
  ```
  * 使用better-scroll时必须将内容区放在一个不定高的容器内，然后外层容器高度固定，才能让内容区实现滚动
  * 数据更新后，页面重新渲染：
    * 在mounted中使用this.$nextTick()回调可以使页面在数据更新后才渲染
    * 使用watch监视变化的数据达不到一样的效果，不知道为什么


## 第三天 03.16

### 进度
* 完成首页的静态页面和数据交互，分类页面完成路由搭建及”品牌“部分数据展示

### 问题
* 组件复用
  * 传入的数据结构相同的时候，可以重复使用同一个组件，然后把对应的数据传入，简化编码
  * 如果当前组件需要使用轮播（swiper）、滚动（better-scroll）等插件，则创建新的对象时需要监视传入的数据
* 多维数组嵌套的时候，容易混肴数据结构而导致数据显示的时候出错
* 数据还未传入时页面渲染会显示变量”xxx is not undefined“, 在外层标签中加入”v-if = xxx“即可解决


## 第四天 03.17

### 进度
* 完成首页和分类页所有静态页面及数据展示

### 问题
* 懒加载
  ```javascript
      // 在main.js中配置
      import VueLazyload from 'vue-lazyload'
      Vue.use(VueLazyload, {
        loading:require('./common/img/default-epet.jpg')
      })

      // 使用:将原本的"src"改为"v-lazy"即可
      <img v-lazy="xxx.jpg"/>
  ```

* 页面内容显示之前的loading图:使用mint-ui插件的Indicator
  ```javascript
        //在main.js中配置
        import MintUI from 'mint-ui'
        import 'mint-ui/lib/style.css'
        Vue.use(MintUI)

        //在需要的组件中添加
        mounted () {
          // 打开:Indicator.open()
          Indicator.open({
            // 自定义loading图底部的文字
            text: '数据加载中',
            // 可选loading图样式:'snake', 'fading-circle', 'double-bounce', 'triple-bounce'
            spinnerType: 'fading-circle'
          })
          // 关闭:Indicator.close(),自定义时间间隔
          setTimeout(()=>Indicator.close(),1000)
        }
  ```
