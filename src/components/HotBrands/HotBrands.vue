<template>
  <div class="hotBrands" >
    <div class="contentBox" >
      <div href="javascript:;" class="top">
        <span class="title">{{brandsList[0].title}}</span>
      </div>
      <ul class="list">
        <li class="type" v-for="(item, index) in brandsList[0].list" :key="index">
          <a href="javascript:;">
            <div class="image"><img v-lazy="item.logo"></div>
            <div class="name">{{item.name}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      brandsList: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .hotBrands
    .contentBox
      padding 5px 5px 20px
      border-top 1px solid #f3f4f5
      .top
        font-size 12px
        color #999
        display flex
        justify-content space-between
        align-items center
        padding-left 5px
        margin-top 10px
        .allGoods
          display block
          img
            height 10px
            margin-top 5px
            margin-right 5px
      .list
        display flex
        flex-wrap wrap
        .type
          width 50%
          padding 0 5px
          margin-top 10px
          a
            display block
            color #333
            .image
              width 100%
              text-align center
              border 1px solid #f3f4f5
              height 55px
              img
                height 45px
                margin-top 4px
            .name
              font-size 12px
              text-align center
              margin-top 5px
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
</style>
