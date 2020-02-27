import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// Layout Components
import Default from "@/layouts/DefaultLayout.vue";
import Blank from "@/layouts/BlankLayout.vue";
import Dashboard from "@/layouts/DashboardLayout.vue";
import Marketing from "@/layouts/MarketingLayout"
import Auth from "@/layouts/AuthLayout"
import  router  from "@/routers/router.js";

Vue.component('default-layout', Default);
Vue.component('blank-layout', Blank);
Vue.component('dashboard-layout', Dashboard);
Vue.component('marketing', Marketing);
Vue.component('auth', Auth);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
