<template>
  <div class="dogSwiper">
    <div class="swiper-container lunboSwiper" ref="lunboSwiper">
      <ul class="swiper-wrapper" >
        <li class="swiper-slide" v-for="(item, index) in carouselImgs" :key="index">
          <a href="javascript:;"><img :src="item.image"></a>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default{
    props: {
      carouselImgs:Array
    },
    watch:{
      carouselImgs () {
        this.$nextTick(()=>{
          const LunboSwiper = new Swiper(this.$refs.lunboSwiper, {
            preventClicks: false,
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dogSwiper
    width 100%
    .lunboSwiper
      width 100%
      ul
        width 100%
        li
          width 100%
          img
            display block
            width 100%
</style>
