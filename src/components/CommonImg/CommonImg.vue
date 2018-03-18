<template>
  <div class="commonImg">
    <img v-lazy="imageSrc">
  </div>
</template>

<script>
  export default{
    props:{
      imageSrc: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .commonImg
    width 100%
    img
      display block
      width 100%
</style>
