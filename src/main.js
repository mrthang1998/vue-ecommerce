import Vue from "vue";
import App from "./App.vue";
import router from "./router";
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

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
