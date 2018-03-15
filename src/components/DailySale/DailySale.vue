<template>
  <div class="dailySale">
    <div class="title">
      <span class="dailyImg"><img :src="msiteData.dailySale.surprise_icon.image"></span>
      <span class="dailyTitle">
        <span>{{msiteData.dailySale.title}}</span>
        <span class="dailyTime">17</span>
        <span>:</span>
        <span class="dailyTime">00</span>
      </span>
      <span class="dailyMore">
        <a href="javascript:;"><img :src="msiteData.dailySale.right_image.image"></a>
      </span>
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
      position relative
      .dailyTitle
        font-size 13px
      .dailyImg
        img
          width 85px
      .dailyMore
        display inline-block
        width 135px
        height 34px
        position absolute
        top 0
        right 0
        a
          display inline-block
          width 100%
          height 100%
          img
            width 50%
    #dailySaleSwiper
      width 100%
      height 130px
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
            .itemImg
              width 100%
              img
                width 100%;
            .salePrice
              width 100%
              display inline-block
              color red
            .littlePrice
              width 100%
              display inline-block
              color #999
              font-size 12px
</style>
