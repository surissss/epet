<template>
  <div class="typeContent" >
      <div class="contentBox" v-for="(type,index) in typesList" :key="index">
        <div href="javascript:;" class="top">
          <span class="title">{{type.title}}</span>
          <div>
            <a class="allGoods" v-if="type.rigth_img.image !== '' "><img src="./cate.png"></a>
          </div>
        </div>
        <ul class="list">
          <li class="type" v-for="(item,index) in type.list">
            <a href="javascript:;">
              <div class="image"><img v-lazy="item.photo"></div>
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
      typesList:Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.typeContent
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
        width 33.33%
        padding 0 5px
        margin-top 10px
        a
          display block
          color #333
          .image
            img
              width 100%
          .name
            font-size 13px
            text-align center
            margin-top 10px
            height 20px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
</style>
