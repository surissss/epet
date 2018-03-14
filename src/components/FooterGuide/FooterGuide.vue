<template>
  <div class="footer_guide border-1px">
    <span class="guide_item msite" @click="goto('/msite')">
      <a href="javascript:;" :class="{on: $route.path==='/msite'}"></a>
    </span>
    <span class="guide_item classify" @click="goto('/classify')">
      <a href="javascript:;" :class="{on: $route.path==='/classify'}"></a>
    </span>
    <span class="guide_item shopcart" @click="goto('/shopcart')">
      <a href="javascript:;" :class="{on: $route.path==='/shopcart'}"></a>
    </span>
    <span class="guide_item myepet" @click="goto('/myepet')">
      <a href="javascript:;" :class="{on: $route.path==='/myepet'}"></a>
    </span>
  </div>
</template>

<script>
  export default{
    methods: {
      goto (path) {
        // 跳转到指定路径
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #ffffff
    width 375px
    height 45px
    border-top 1px solid #e7e7e7
    display flex
    justify-content space-between
    .guide_item
      //flex 1
      margin 0 auto
      >a
        height 40px
        width 42px
        background-image url("./img.png")
        background-size 234px 163px
        background-repeat no-repeat
        display block
        margin-top 2px
      &.msite
        a
          background-position -85px 0
          &.on
            background-position -42px 0
      &.classify
        a
          background-position -85px -41px
          &.on
            background-position -42px -40px
      &.shopcart
        a
          background-position -85px -81px
          &.on
            background-position -42px -81px
      &.myepet
        a
          background-position -85px -122px
          &.on
            background-position -42px -122px
</style>
