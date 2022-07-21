import Vue from 'vue'
import App from './App.vue';
import router from './router';
import  Router from 'vue-router';
import { formatDate } from './filters/formatDate';

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.use( Router );
Vue.filter( 'formatDate' , formatDate );

new Vue({
  render: h => h(App),
  router 
}).$mount('#app');
