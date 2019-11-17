import Vue from 'vue';
import App from './App.vue'

import SimpleVueValidation from 'simple-vue-validator';
Vue.use(SimpleVueValidation);
import router from './router';


new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});