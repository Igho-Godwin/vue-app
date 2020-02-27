<template>
  <div id="app">
    <p>"Welcome to REACH for Business"</p>
    <router-view></router-view>
    <p>
    <router-link to="/sign-in">Sign In</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
