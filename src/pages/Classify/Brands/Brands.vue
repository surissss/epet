<template>
  <div class="brands">
    <Brandslist />
  </div>
</template>

<script>
  import Brandslist from '../../../components/Brandslist/Brandslist.vue'
  export default{
    components: {
      Brandslist
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brands
    margin-top 5px
    background-color #fff
</style>
