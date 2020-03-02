<template>
  <div id="app">
    <component :is="layout">
    <router-view></router-view>
    </component>
  </div>
</template>

<script>

  export default{
    name: 'App',
    computed: {
      layout() {
        return (this.$route.meta.layout ) ;
      }
    }
  }
</script>

<style lang="scss">
@import "@/scss/vendors/themed-bootstrap.scss";
@import "@/scss/main.scss";
</style>
