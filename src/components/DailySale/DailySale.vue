<template>
  <div class="dailySale" v-if="msiteData.dailySale.surprise_icon">
    <div class="title" >
      <div class="dailyImg"><img :src="msiteData.dailySale.surprise_icon.image"></div>
      <div class="right">
        <span class="dailyTitle">{{msiteData.dailySale.title}}</span>
        <span class="dailyTime">
          <span class="time">17</span>
          <span>:</span>
          <span class="time">00</span>
        </span>
        <span class="dailyMore">
          <a href="javascript:;"><img :src="msiteData.dailySale.right_image.image"></a>
        </span>
      </div>
    </div>
    <div class="swiper-container" id="dailySaleSwiper">
      <ul class="swiper-wrapper" >
        <li class="swiper-slide" v-for="(item, index) in msiteData.dailySale.goods" :key="index">
          <a href="javascript:;">
            <span class="itemImg">
              <img :src="item.image.image" alt="">
            </span>
            <span class="salePrice">￥{{item.sale_price}}</span>
            <span class="littlePrice">{{item.little_price}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default{
    mounted () {
      this.$store.dispatch('getDailySale', () => {
        this.$nextTick(()=> {
          var dailySaleSwiper = new Swiper('#dailySaleSwiper', {
            preventClicks: false,
            slidesPerView: 3.5
          })
        })
      })
    },
    computed: {
      ...mapState(['msiteData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dailySale
    width 100%
    background-color white
    box-sizing border-box
    .title
      width 100%
      padding 10px
      box-sizing border-box
      display flex
      justify-content space-between
      .dailyTitle
        font-size 13px
      .dailyImg
        img
          display inline-block
          margin-top 6px
          width 85px
      .right
        display flex
        align-items center
        .dailyTitle
          font-size 13px
          margin-right 5px
        .dailyTime
          .time
            display inline-block
            border 1px solid #ddd
            font-size 13px
            padding 2px 2px
      .dailyMore
        display inline-block
        width 67px
        height 34px
        a
          display inline-block
          width 100%
          height 100%
          img
            width 100%
    #dailySaleSwiper
      width 100%
      height 130px
      padding-bottom 10px
      padding-left 5px
      .swiper-wrapper
        width 100%
        height 130px
        .swiper-slide
          font-size 14px
          text-align center
          height 130px
          a
            display inline-block
            box-sizing border-box
            height 130px
            padding 0 .5em
            .itemImg
              width 100%
              img
                width 100%
                box-sizing border-box
                padding 0 5%
                display block
            .salePrice
              width 100%
              display inline-block
              color red
              font-size 14px
              margin 5px 0
            .littlePrice
              width 100%
              display inline-block
              color #999
              font-size 12px
</style>
