<template>
  <div class="dogSwiper">
    <div class="swiper-container" id="LunboSwiper">
      <ul class="swiper-wrapper" >
        <li class="swiper-slide" v-for="(item, index) in msiteData.lunboImgs" :key="index">
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
    data () {
      return {
        imgsNum: [1, 2, 3, 4, 5, 6]
      }
    },
    mounted () {
      this.$store.dispatch('getLunboImgs', ()=>{
        this.$nextTick(()=>{
          const LunboSwiper = new Swiper('#LunboSwiper', {
            preventClicks: false,
            loop: true,
            autoplay: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
          })
        })
      })

    },
    computed:{
      ...mapState(['msiteData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .dogSwiper
    width 100%
    #LunboSwiper
      width 100%
      ul
        width 100%
        li
          width 100%
          img
            display block
            width 100%
</style>
