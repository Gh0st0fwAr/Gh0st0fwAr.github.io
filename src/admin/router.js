import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import about from './components/about.vue';
import works from './components/works.vue';
import reviews from './components/reviews.vue';

const routes = [
   {
      path: '/',
      component: about
   },
   {
      path: '/works',
      component: works
   },
   {
      path: '/reviews',
      component: reviews
   }
];

export default new VueRouter({ routes });