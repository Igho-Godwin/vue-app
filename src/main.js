import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// Layout Components
import Default from "@/layout/DefaultLayout.vue";
import Blank from "@/layout/BlankLayout.vue";

Vue.component('default-layout', Default);
Vue.component('blank-layout', Blank);

const router = new VueRouter({
  routes: [
    { 
      path: '/sign-in',
      component: () => import("@/components/authentications/SignIn")
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
