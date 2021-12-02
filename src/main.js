import Vue from 'vue'
import App from './App.vue'
import router from './router';
import vuetify from './plugins/vuetify'
import axios from 'axios'




import {BASE_URL} from '../env'

window.axios = axios
// axios.defaults.headers = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
axios.defaults.baseURL = BASE_URL
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
