import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { 
      path: '/sign-in',
      component: () => import("@/components/authentications/Sign")
    },
    { 
      path: '/',
      component: () => import("@/components/pages/Landing")
    },
    { 
      path: '/dashboard',
      component: () => import("@/components/pages/Dashboard")
    }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
