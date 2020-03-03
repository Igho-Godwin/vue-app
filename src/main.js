import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import  router  from "@/routers/router.js";


// Layout Components
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Setting from "@/layouts/SettingLayout.vue";

Vue.component('default', DefaultLayout);
Vue.component('setting', Setting);


Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
