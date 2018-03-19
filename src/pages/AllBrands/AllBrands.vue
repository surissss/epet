<template>
  <div class="allBrands">
    <CommonHeader :title=" '全部品牌' "/>
    <div class="list" ref="allBrandScroll">
      <div ref="brandWrapper">
        <BrandItem class="brandItem" v-for="(bandItem,index) in allBrand" :key="index" :brandContent="bandItem"/>
      </div>
    </div>

    <div class="menu-wrapper">
      <ul>
        <!--current-->
        <li class="menu-item" v-for="(item, index) in menus"
            :key="index"  @click="selectCurrent(index)">
          <span class="text" :class="{current:index===currentIndex}">{{item}}</span>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import CommonHeader from '../../components/CommonHeader/CommonHeader.vue'
  import BrandItem from '../../components/BrandItem/BrandItem.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import {setLoading} from '../../common/mixins'
  export default{
    data(){
      return {
        scrollY:0,
        tops:[],
        selectedStr: '',
        num:0,
        menus:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      }
    },
    mixins:[setLoading],
    mounted(){
      this.$store.dispatch('getAllBrand', () => {// goods更新了, 界面还没有更新
        this.$nextTick(() => {
          // 初始化滚动
          this._initScroll()
          // 初始化tops
          this._initTops()
        })
      })
    },
    computed:{
      ...mapState(['allBrand']),

      // 当前索引的下标
      currentIndex () { // findIndex(): 返回值是第个返回true所对应的index
        const {scrollY, tops} = this
        // scrollY要>=当前的top && 小于下一个top
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }
    },
    methods:{
      _initScroll () {
        // 左侧分类列表的BScroll
        this.allBrandScroll = new BScroll(this.$refs.allBrandScroll,{
          probeType: 2, // 手指滑动(惯性滑动和编码滑动不监视)
          click: true //响应点击
        })

        // 监视滑动过程
        this.allBrandScroll.on('scroll', (pos) => {
          //console.log(pos.y)
          // 保存y
          this.scrollY = Math.abs(pos.y)
        })
        // 监视滑动结束
        this.allBrandScroll.on('scrollEnd',(pos) => {
          //console.log('滑动结束', pos.y)
          this.scrollY = Math.abs(pos.y)  // 解决惯性滑动更新
        })
      },

      _initTops () {
        const tops = []
        let top = 0
        // 计算各个 top, 并保存到tops
        tops.push(top)

        // 得到ul下所有的子li
        const brandItems = this.$refs.brandWrapper.getElementsByClassName('brandItem')
        Array.prototype.slice.call(brandItems).forEach((brandItem, index) => {
          top += brandItem.clientHeight
          tops.push(top)
        })
        // 保存tops
        this.tops = tops
        //console.log(this.tops)
      },

      // 选择当前分类
      selectCurrent (index) {
        //console.log('selectCurrent()')
        // 得到滚动目标坐标
        const top = this.tops[index]
        // 更新目标scrollY值
        this.scrollY = top
        // 平滑滚动到指定位置
        this.allBrandScroll.scrollTo(0, -top, 300)
      },

      // 显示指定food
      showFood (food) {
        // 保存food
        this.selectedFood = food
        // 显示food
        this.$refs.food.showOrHide(true)  // 父组件中调用子组件的方法
      }
    },
    components:{
      CommonHeader,
      BrandItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .allBrands
    width 100%
    height 100%
    padding-bottom 118px
    .list
      height 100%
    .menu-wrapper
      position fixed
      right 4PX
      top 0
      bottom 0
      width 10px
      display flex
      align-items center
      >ul
        .menu-item
          .text
            height 12px
            font-size 12px
            display block
            margin-top 2px
            text-align center
            &.current
              color red


</style>
