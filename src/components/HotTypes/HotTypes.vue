<template>
  <div class="hotTypes">
    <ul>
      <li v-for="(item,index) in msiteData.hotTypes" :key="index"><a href="javascript:;" ><img :src="item.image"></a></li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed:{
      ...mapState(['msiteData'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .hotTypes
    width 100%
    ul
      width 100%
      display flex
      flex-wrap wrap
      li
        width 20%
        a
          width 100%
          img
            width 100%
            display block
</style>
