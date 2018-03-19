<template>
  <div class="typesContainer">
    <div class="leftBox" ref="leftBox">
      <div class="nameList" >
        <ul>
          <li v-for="(leftItem,index1) in typesName" :key="index1" :class="{on:index1 === num}" @click="tab(index1)">{{leftItem.name}}</li>
        </ul>
      </div>
    </div>
    <div class="rightBox" style="background: white" ref="rightBox">
      <div>
        <div class="typesList" v-for="(item,index2) in typesList" :key="index2" :class="{on:index2 === num}">
          <TypeContent :typesList="item.types"/>
          <div v-if="item.hotBrands[0]">
            <HotBrands :brandsList="item.hotBrands"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {setLoading} from '../../../common/mixins'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import TypeContent from '../../../components/TypeContent/TypeContent.vue'
  import HotBrands from '../../../components/HotBrands/HotBrands.vue'
  export default{
    data(){
      return {
        num:0
      }
    },
    mixins:[setLoading],
    mounted(){
      this.$store.dispatch('getTypesName', () => {
        this.$nextTick(() => {
          if(!this.nameScroll) {
            this.nameScroll = new BScroll(this.$refs.leftBox, {
              click: true,
              bounceTime: 300
            })
          } else {
            this.nameScroll.refresh()
          }
        })
      })
      this.$store.dispatch('getTypesList',()=>{
        this.$nextTick(()=>{
          console.log('111',this.arr)
          if(!this.contentScroll) {
            this.contentScroll = new BScroll(this.$refs.rightBox, {
              click: true
            })
          } else {
            this.contentScroll.refresh()
          }
        })
      })
    },
    computed: {
      ...mapState(['typesName', 'typesList'])
    },
    methods: {
      tab(index1) {
        this.num = index1
      }
    },
    components:{
      TypeContent,
      HotBrands
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .typesContainer
    width 100%
    height 100%
    padding-bottom 45px
    .leftBox
      position fixed
      top 40px
      left 0
      bottom 0
      margin-bottom 45px
      border-right 5px solid #f3f4f5
      background #ffffff
      .nameList
        ul
          li
            text-align center
            margin auto 0
            border-bottom 1px solid #f3f4f5
            width 70px
            height 50px
            line-height 50px
            font-size 13px
            text-overflow ellipsis
            white-space nowrap
            &.on
              background-color #f3f4f5
              color #de4044
    .rightBox
      margin-left 75px
      height 100%
      .typesList
        display none
        &.on
          display block
</style>
