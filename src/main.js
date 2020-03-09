import Vue from 'vue'
import App from './App.vue'
import router from "@/routers/router.js";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import store from './store'
Vue.config.productionTip = false
 
Vue.use(VueSweetalert2);



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
  store,
  render: h => h(App),
}).$mount('#app')
