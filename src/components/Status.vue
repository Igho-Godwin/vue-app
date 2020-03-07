<template>
  <div class="text-bounds" :class="bgColor">
    <caption class="caption p-0" :class="textColor">{{status}}</caption>
  </div>
</template>

<script>
  export default {
    props: ['status', 'bgColor', 'textColor']
  }
</script>

<style lang="scss" scoped>
  @import "@/scss/abstracts/_variables.scss";

  .text-bounds {
    width: 6.0625rem;
    height: 1.5rem;
    border-radius: 4px;
    padding: 2px 8px;
    text-align: -webkit-center;
  }
</style>