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
      <div class="indexContent" id="indexContent">
        <div class="scrollWrapper">
          <!--大图轮播-->
          <MsiteCarousel />
          <div class="dogImg"><img :src="msiteData.otherImgs[0]"></div>
          <div class="hotTypes">
            <ul>
              <li v-for="(item,index) in msiteData.hotTypes" :key="index"><a href="javascript:;" ><img :src="item.image"></a></li>
            </ul>
          </div>
          <!--每日惊喜-->
          <DailySale />
          <div class="commonImg">
            <img :src="msiteData.otherImgs[1]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[2]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[3]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[4]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[5]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[6]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[7]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[8]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[9]">
          </div>
          <div class="commonImg">
            <img :src="msiteData.otherImgs[10]">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import MsiteCarousel from '../../components/MsiteCarousel/MsiteCarousel.vue'
  import DailySale from '../../components/DailySale/DailySale.vue'
  //import DownloadApp from '../../components/DownloadApp/DownloadApp.vue'
  export default{
    data () {
      return {
        num: 0
      }
    },
    mounted () {
      this.$store.dispatch('getHeaderMenus')
      this.$store.dispatch('getHotTypes')
      this.$store.dispatch('getOtherImags',()=>{
        this.$nextTick(()=>{
          var topMenuSwiper = new Swiper('#topMenuSwiper',{
            preventClicks: false,
            slidesPerView: 5
          })

          this.myScroll = new BScroll('#indexContent',{
            click: true
          })
        })
      })
    },
    computed: {
      ...mapState(['msiteData'])
    },
    methods: {
      tab(index) {
        this.num = index
        console.log("1231231",this.msiteData.headerMenus)
      }
    },
    components: {
      MsiteCarousel,
      DailySale
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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

          .dogImg
            width 100%
            img
              display block
              width 100%
          .commonImg
            width 100%
            img
              display block
              width 100%
</style>
