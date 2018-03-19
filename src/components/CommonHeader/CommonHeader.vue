<template>
  <div class="header">
    <div class="top">
      <div class="back" @click="$router.back()"><a href="javascript:;"></a></div>
      <div class="title">{{title}}</div>
      <div class="showOptions" @click="showOptions"></div>
    </div>
    <transition name="fade" >
      <div class="options" v-if="isShow">
        <span class="guide_item msite" @click="goto('/msite')">
          <a href="javascript:;" ></a>
          <span>首页</span>
        </span>
        <span class="guide_item classify" @click="goto('/classify')">
          <a href="javascript:;" ></a>
          <span>商品分类</span>
        </span>
        <span class="guide_item shopcart" @click="goto('/shopcart')">
          <a href="javascript:;" >
            <span>0</span>
          </a>
          <span>购物车</span>
        </span>
        <span class="guide_item myepet" @click="goto('/login')">
          <a href="javascript:;"></a>
          <span>我的e宠</span>
        </span>
      </div>
    </transition>

  </div>
</template>

<script>
  export default{
    data(){
      return {
        isShow:false
      }
    },
    props:{
      title:String
    },
    methods:{
      showOptions(){
        this.isShow = !this.isShow
      },
      goto (path) {
        // 跳转到指定路径
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100%
    background-color #ffffff
    position relative
    top 0
    left 0
    right 0
    z-index 3
    .top
      height 50px
      line-height 50px
      padding 0 10px
      border-bottom 1px solid #f3f3f3
      display flex
      justify-content space-between
      .back
        >a
          display block
          background url("./img.png") no-repeat
          background-size 234px 159px
          background-position -201px -10px
          height 18px
          width 11px
          margin-top 15px
      .showOptions
        background: url('./img.png') no-repeat
        background-size 234px 163px
        background-position -217px -10px
        height 18px
        width 17px
        margin-top 15px
    .options
      background-color #ffffff
      width 100%
      height 68px
      border-bottom 1px solid #d7d7d7
      display flex
      justify-content space-between
      position relative
      overflow hidden
      &.fade-enter-active
        transition all .3s linear
      &.fade-leave-active
        transition all .3s linear
      &.fade-enter,&.fade-leave-to
        height 0
      .guide_item
        width 25%
        display flex
        flex-direction column
        justify-content center
        align-items center
        >a
          height 25px
          width 25px
          background url("./img.png") no-repeat
          background-size 234px 163px
          display inline-block
        >span
          font-size 14px
          color #666
        &.msite
          a
            background-position -172px -7px
        &.classify
          a
            background-position -172px -49px
        &.shopcart
          a
            background-position -172px -90px
            //position relative
            >span
              display inline-block
              height 22px
              width 22px
              color #fff
              text-align center
              line-height 18px
              font-size 12px
              background red
              border-radius 1em
              border #fff solid 2px
              position: relative
              top -.5em
              left 1em
        &.myepet
          a
            background-position -172px -133px



</style>
