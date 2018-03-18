<template>
  <div class="msite">
    <!--<DownloadApp class="Download"/>-->
    <div class="indexBox">
      <div class="indexHeader">
        <div class="search">
          <span class="petType">
            <span>猫猫</span>
            <span>|</span>
            <span class="address">重庆</span>
            <i class="iconfont icon-iconfontarrowdown"></i>
          </span>
          <span class="searchInput">
            <a href="javascript:;">
              <input type="text" placeholder="搜索商品和品牌" disabled="disabled">
              <img src="./search.png">
            </a>
          </span>
          <span class="news">
            <a href="javascript:;">
              <img src="./mydope.png">
            </a>
          </span>
        </div>
        <div class="swiper-container" id="topMenuSwiper">
          <ul class="swiper-wrapper" >
            <li class="swiper-slide" v-for="(menu,index) in msiteData.headerMenus" :key="index" @click="tab(index)">
              <a href="javascript:;" :ref="menu.menu_name" :class="{on: index === num}">
                <span>{{menu.menu_name}}</span>
                <i></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="indexContent" ref="indexContent" >
        <div class="scrollWrapper">
          <!--顶部轮播-->
          <MsiteCarousel :carouselImgs="lunboImgs[0]"/>
          <CommonImg :imageSrc="otherImgs[0]"/>
          <!--10个图标导航-->
          <div class="hotTypes">
            <ul>
              <li v-for="(item,index) in msiteData.hotTypes" :key="index"><a href="javascript:;" ><img :src="item.image"></a></li>
            </ul>
          </div>
          <CommonImg :imageSrc="otherImgs[1]"/>
          <!--每日疯抢-->
          <DailySale />
          <CommonImg :imageSrc="otherImgs[2]"/>
          <CommonImg :imageSrc="otherImgs[3]"/>
          <CommonImg :imageSrc="otherImgs[4]"/>
          <Activities :itemContainers="msiteData.advertImgs[0]"/>
          <CommonImg :imageSrc="otherImgs[5]"/>
          <!--中部轮播-->
          <MsiteCarousel :carouselImgs="lunboImgs[1]"/>
          <CommonImg :imageSrc="otherImgs[6]"/>
          <!--5个左右布局遍历-->
          <Activities v-for="(itemContainers,index) in flexibleCollection" :key="index" :itemContainers="itemContainers"/>
          <CommonImg :imageSrc="otherImgs[7]"/>
          <CommonImg :imageSrc="otherImgs[8]"/>
          <CommonImg :imageSrc="otherImgs[9]"/>
          <Activities :itemContainers="msiteData.advertImgs[6]"/>
          <CommonImg :imageSrc="otherImgs[10]"/>
          <Activities :itemContainers="msiteData.advertImgs[7]"/>
          <div class="bottom">
            <div class="firstLine">
              <span>触屏版</span>
              <span><a href="javascript:;">手机客户端</a></span>
              <span><a href="javascript:;">关于我们</a></span>
              <span><a href="javascript:;">联系我们</a></span>
            </div>
            <div class="lastLine">© wap.epet.com 版权：重庆易宠科技有限公司</div>
          </div>
        </div>
      </div>
      <div class="goCat"></div>
    </div>
  </div>
</template>

<script>
  import {Indicator} from 'mint-ui'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import CommonImg from '../../components/CommonImg/CommonImg.vue'
  import MsiteCarousel from '../../components/MsiteCarousel/MsiteCarousel.vue'
  import DailySale from '../../components/DailySale/DailySale.vue'
  import Activities from '../../components/Activities/Activities.vue'
  //import DownloadApp from '../../components/DownloadApp/DownloadApp.vue'
  export default{
    data () {
      return {
        num: 0
      }
    },
    mounted () {
      Indicator.open({
        text: '数据加载中',
        spinnerType: 'fading-circle'
      })
      setTimeout(()=>Indicator.close(),1000)

      this.$store.dispatch('getHeaderMenus',()=>{
        this.$nextTick(()=>{
          var topMenuSwiper = new Swiper('#topMenuSwiper',{
            preventClicks: false,
            slidesPerView: 5
          })
        })
      })
      this.$store.dispatch('getImgsList')
      this.$store.dispatch('getHotTypes')
      this.$store.dispatch('getAdvertImgs',()=>{
        this.$nextTick(()=>{
          this.myScroll = new BScroll(this.$refs.indexContent, {
            click:true
          })
        })
      })

    },
    computed: {
      ...mapState(['msiteData']),

      // 5个集中在一起的左右布局模块
      flexibleCollection(){
        const arr = this.msiteData.advertImgs.slice(1,6)
        return arr
      },

      // 轮播图片集合
      lunboImgs () {
        const arr = this.msiteData.imgsList.filter( item => {
          return item.index === "3160" || item.index === "3171"
        }).map(item => {
          return item.value
        })
        return arr
      },
      // 轮播以外的“图片轮播广告”数据
      otherImgs () {
        const arr = this.msiteData.imgsList.filter(item => {
          return item.index !== "3160" && item.index !== "3171"
        }).map(item => {
          return item.value[0].image
        })
        return arr
      }

    },
    methods: {
      tab(index) {
        this.num = index
      }
    },
    components: {
      CommonImg,
      MsiteCarousel,
      DailySale,
      Activities
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite
    width 100%
    height 100%
    background-color white
    .indexBox
      width 100%
      height 100%
      box-sizing border-box
      position relative
      padding-top 86px
      padding-bottom 46px
      .indexHeader
        width 100%
        background-color #ffffff
        position fixed
        top 0
        left 0
        right 0
        z-index 100
        overflow hidden
        .search
          width 100%
          height 51px
          display flex
          justify-content space-between
          box-sizing border-box
          padding 13px 10px
          line-height 25px
          .petType
            font-size 14px
            text-align center
            color #898989
            position relative
            .address
              font-size 13px
            i
              font-size 13px
              display inline-block
              transform scale(0.7)
              position absolute
              top 1px
              right -14px
          .searchInput
            width 69%
            a
              font-size 0
              width 100%
              height 100%
              margin-left 5px
              display block
              position relative
              input
                width 100%
                height 100%
                outline none
                text-indent 10px
                background-color #e9e9e9
                font-size 13px
                border-radius 4px
              img
                width 11px
                height 11px
                position absolute
                top 0
                right 5px
                bottom 0
                margin auto 0
          .news
            height 100%
            a
              img
                height 100%
        #topMenuSwiper
          width 100%
          height 35px
          .swiper-wrapper
            width 100%
            height 35px
            .swiper-slide
              font-size 14px
              text-align center
              height 35px
              line-height 35px
              a
                display inline-block
                box-sizing border-box
                height 35px
                &.on
                  color #e73f85
                  border-bottom 2px solid #e73f85
      .indexContent
        width 100%
        height 100%
        .scrollWrapper
          .hotTypes
            width 100%
            ul
              width 100%
              display flex
              flex-wrap wrap
              li
                width 20%
                a
                  width 100%
                  img
                    width 100%
                    display block

          .bottom
            width 100%
            height 86px
            margin 1em 0 0
            .firstLine
              font-size 14px
              padding 15px 0 10px
              text-align center
              span
                padding-right 8px
                a
                  color #333
                &:nth-child(1)
                  color red
            .lastLine
              text-align center
              margin 0 10px
              padding-bottom 25px
              font-size 12px
      .goCat
        animate("./gocat.png")
        position fixed
        bottom 15%
        right -1px
        z-index 1000
</style>
