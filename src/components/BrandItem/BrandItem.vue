<template>
  <div class="brandItem">
    <div class="title">{{brandContent.order}}</div>
    <ul class="list">
      <li class="item" v-for="(item,index) in brandContent.list">
        <a href="javascript:;">
          <div class="brandWrapper">
            <div class="logo">
                <div class="image"><img v-lazy="item.logo"></div>
                <span class="recommend" :class="{on:item.recommend === 1}"><img src="./jian.png"></span>
                <span class="gongYi" :class="{on:item.tagongyi === 1}">TA公益</span>
            </div>
            <div class="brandName">
              <div class="name">{{item.name}}</div>
              <div class="country">{{item.address}}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props:{
      brandContent: Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .brandItem
    width 100%
    height 100%
    .title
      text-indent 15px
      line-height 24px
      color #999
      font-size 12px

    .list
      .item
        >a
          display block
          background-color #ffffff
          color #333
          .brandWrapper
            padding 10px
            border-bottom 1px solid #f3f4f5
            margin-right 20px
            display flex
            .logo
              width 30%
              max-width 150px
              height 50px
              border 1px solid #f3f4f5
              position relative
              .image
                max-width 90%
                margin 5px auto
                text-align center
                height 40px
                img
                  height 40px
              .recommend
                display none
                &.on
                  display block
                img
                  width 13px
                  height 13px
                  position absolute
                  top 0
                  left 0
              .gongYi
                position absolute
                top 0
                right -2px
                font-size 12px
                transform scale(0.89)
                padding 3px 2px
                background-color #e44b46
                color #fff
                z-index 2
                display none
                &.on
                  display block

            .brandName
              display flex
              flex-direction column
              justify-content center
              margin 5px 0 5px 20px
              .name
                font-size 14px
                margin-bottom 7px
              .country
                font-size 12px
                color #999

</style>
