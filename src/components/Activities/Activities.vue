<template>
  <div class="activities" >
    <ul class="activity" v-if="itemContainers">
      <li v-for="(leftItem,index1) in itemContainers[0]" :key="index1">
        <a href="javascript:;"><img v-lazy="leftItem.image"></a>
      </li>
    </ul>
    <ul class="activity" v-if="itemContainers">
      <li v-for="(rightItem,index2) in itemContainers[1]" :key="index2">
        <a href="javascript:;"><img v-lazy="rightItem.image"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    props: {
      itemContainers: Array
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .activities
    width 100%
    display flex
    .activity
      img
        width 100%
        display block
</style>
