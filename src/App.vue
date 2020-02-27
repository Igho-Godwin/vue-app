<template>
  <div id="app">
    <component :is="layout">
    <p>"Welcome to REACH for Business"</p>
    <router-view></router-view>
    <p>
    <router-link to="/sign-in">Sign In</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    </p>
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
