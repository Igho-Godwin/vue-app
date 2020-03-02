import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import  router  from "@/routers/router.js";


// Layout Components
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Onboarding from "@/layouts/OnboardingLayout.vue";
import Setting from "@/layouts/SettingLayout.vue";


Vue.component('dashboard', DashboardLayout);
Vue.component('default', DefaultLayout);
Vue.component('onboarding', Onboarding);
Vue.component('setting', Setting);


Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
