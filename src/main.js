import Vue from 'vue'
import App from './App.vue'
import router from "@/routers/router.js";

// === LAYOUTS ===
  // Default Layout
  import DefaultLayout from "@/layouts/DefaultLayout.vue";
  Vue.component('default', DefaultLayout);
  // Dashboard Layout
  import DashboardLayout from "@/layouts/DashboardLayout.vue";
  Vue.component("dashboard", DashboardLayout);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
