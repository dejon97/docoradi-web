import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify'
import axios from 'axios'
import store from './store/'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const options = {
  confirmButtonColor: '#10092e',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, options);


import {BASE_URL} from '../env'

window.axios = axios
// axios.defaults.headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
axios.defaults.baseURL = BASE_URL
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
