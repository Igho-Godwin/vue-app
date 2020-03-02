import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// Layout Components
import Dashboard from "@/layouts/DashboardLayout.vue";
import Auth from "@/layouts/AuthLayout.vue";
import  router  from "@/routers/router.js";
import Onboarding from "@/layouts/OnboardingLayout.vue";

Vue.component('dashboard', Dashboard);
Vue.component('auth', Auth);
Vue.component('onboarding', Onboarding);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
