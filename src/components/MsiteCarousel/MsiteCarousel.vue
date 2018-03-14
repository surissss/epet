<template>
  <div class="swiper-container" id="LunboSwiper">
    <ul class="swiper-wrapper" >
      <li class="swiper-slide"><img src="./1.jpg"></li>
      <li class="swiper-slide"><img src="./2.jpg"></li>
      <li class="swiper-slide"><img src="./3.jpg"></li>
      <li class="swiper-slide"><img src="./4.jpg"></li>
      <li class="swiper-slide"><img src="./5.jpg"></li>
      <li class="swiper-slide"><img src="./6.jpg"></li>
    </ul>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    data () {
      return {
        imgsNum: [1,2,3,4,5,6]
      }
    },
    mounted () {
      const LunboSwiper = new Swiper('#LunboSwiper',{
        preventClicks: false,
        loop: true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #LunboSwiper
    width 100%
    ul
      width 100%
      li
        width 100%
        img
          width 100%
</style>
