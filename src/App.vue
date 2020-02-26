<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to REACH for Business"/>
    <nav>
      <router-link to="./components/home/Sign">Sign</router-link>
      <router-link to="./components/nav-element/Landing">Landing</router-link>
      <router-link to="./components/nav-element/Dashboard">Dashboard</router-link>
    </nav>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: './components/home/Sign', component: Sign},
    { path: './components/nav-element/Landing', component: Landing },
    { path: './components/nav-element/Dashboard', component: Dashboard }
  ]
})

new Vue({
  router
}).$mount('#app')

export default {
  name: 'App',
  components: {
    HelloWorld,
    Sign,
    Landing,
    Dashboard
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
