<template>
  <div class="brands" ref="brands">
    <div class="brandsBox">
      <div class="brandslist" v-for="(items,index) in brands" :key="index">
        <div class="title">—— {{items.title}} ——</div>
        <div class="listContainer">
          <ul class="list">
            <li class="item" v-for="(brand,index) in items.list" :key="index">
              <a href="javascript:;">
                <div class="image"><img v-lazy="brand.logo"></div>
                <span class="brand name">{{brand.name}}</span>
                <span class="brand country">{{brand.address}}</span>
                <span class="recommend" :class="{on:brand.recommend === 1}"><img src="./jian.png"></span>
                <span class="gongYi" :class="{on:brand.tagongyi === 1}">TA公益</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="all" @click="goto('/allbrands')"><a href="javascript:;">全部</a></div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import {setLoading} from '../../../common/mixins'
  export default{
    mixins:[setLoading],
    mounted(){
      this.$store.dispatch('getBrands',()=>{
        this.$nextTick(()=>{
          this.brandsScroll = new BScroll(this.$refs.brands,{
            click: true
          })
        })
      })
    },
    computed:{
      ...mapState(['brands'])
    },
    methods:{
      goto (path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .brands
    width 100%
    height 100%
    .brandsBox
      padding-bottom 45px
      .brandslist
        background-color #fff
        padding-bottom 15px
        padding-bottom 10px
        .title
          color #999
          font-size 12px
          padding-top 23px
          height 39px
          text-align center
        .listContainer
          padding 0 5px
          .list
            display flex
            flex-wrap wrap
            .item
              width 33.33%
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
                  right -1px
                  font-size 12px
                  transform scale(0.89)
                  padding 3px 2px
                  background-color #e44b46
                  color #fff
                  z-index 2
                  display none
                  &.on
                    display block
    .all
      >a
        position fixed
        right 6px
        bottom 65px
        width 40px
        height 40px
        background-color rgba(0,0,0,.4)
        border-radius 20px
        color #ffffff
        font-size 12px
        line-height 40px
        text-align center
</style>
