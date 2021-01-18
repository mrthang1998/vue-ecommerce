import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import {router} from './router'
import './assets/css/font-awesome.min.css';
import './assets/css/linearicons.css';
import './assets/css/animate.css';
import './assets/css/owl.theme.default.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/bootstrap.min.css'
// import './assets/css/bootsnav.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/style2.css'
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
