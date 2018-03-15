<template>
  <div class="downloadApp" v-show="isShow">
    <span class="closebtn" @click="closeBtn">
      <img src="./closebtn.png">
    </span>
    <a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.epet.android.app&ckey=CK1350926861165">
      <img src="./download.jpg">
    </a>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      closeBtn () {
        this.isShow = !this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .downloadApp
    width 100%
    position relative
    z-index 100
    box-sizing border-box
    .closebtn
      width 5%
      position absolute
      top 20%
      left 2%
      img
        width 100%
        height 100%
    a
      display block
      img
        width 100%
        vertical-align middle
</style>
