<template>
  <div class="brandslist">
    <div class="title">—— 推荐品牌 ——</div>
    <div class="listContainer">
      <ul class="list">
        <li class="item">
          <a href="javascript:;">
            <div class="image"><img src="./1.jpg"></div>
            <span class="brand name">冠能</span>
            <span class="brand country">美国</span>
            <span class="recommend"><img src="./jian.png"></span>
            <span class="gongYi">TA公益</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="image"><img src="./1.jpg"></div>
            <span class="brand name">冠能</span>
            <span class="brand country">美国</span>
            <div class="recommend"><img src="./jian.png"></div>
            <span class="gongYi">TA公益</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="image"><img src="./1.jpg"></div>
            <span class="brand name">冠能</span>
            <span class="brand country">美国</span>
            <div class="recommend"><img src="./jian.png"></div>
            <span class="gongYi">TA公益</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="image"><img src="./1.jpg"></div>
            <span class="brand name">冠能</span>
            <span class="brand country">美国</span>
            <div class="recommend"><img src="./jian.png"></div>
            <span class="gongYi">TA公益</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="image"><img src="./1.jpg"></div>
            <span class="brand name">冠能</span>
            <span class="brand country">美国</span>
            <div class="recommend"><img src="./jian.png"></div>
            <span class="gongYi">TA公益</span>
          </a>
        </li>
        <li class="item">
          <a href="javascript:;">
            <div class="image"><img src="./1.jpg"></div>
            <span class="brand name">冠能</span>
            <span class="brand country">美国</span>
            <div class="recommend"><img src="./jian.png"></div>
            <span class="gongYi">TA公益</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brandslist
    padding-bottom 15px
    margin-bottom 10px
    .title
      color #999
      font-size 12px
      padding-top 20px
      height 39px
      text-align center
    .listContainer
      padding 0 5px
      .list
        display flex
        flex-wrap wrap
        .item
          width 33.3333333%
          margin-top 20px
          padding 0 5px
          a
            display flex
            flex-direction column
            align-items center
            position relative
            .image
              width 100%
              text-align center
              border 1px solid #e2e2e2
              height 62px
              padding-top 10px
              img
                height 40px
            .brand
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              &.name
                font-size 13px
                margin-top 5px
                color #333
              &.country
                font-size 12px
                color 12px


            .recommend
              img
                width 13px
                height 13px
                position absolute
                top 0
                left 0


            .gongYi
              position absolute
              top 0
              right 0
              font-size 12px
              transform scale(0.89)
              display block
              padding 3px 2px
              background-color #e44b46
              color #fff
              z-index 2
</style>
