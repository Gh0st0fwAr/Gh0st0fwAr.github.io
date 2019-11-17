import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import about from './components/about.vue';
import works from './components/works.vue';
import reviews from './components/reviews.vue';
import login from './components/login.vue';
import axios from "axios";

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
   },
   {
      path: '/login',
      component: login
   },
];

const baseURL = "https://webdev-api.loftschool.com";
const guard = axios.create({ baseURL });

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
   const isPublicRoute = to.path === '/login'
 
   if (isPublicRoute === false) {
     const token = localStorage.getItem('token');
     guard.defaults.headers['Authorization'] = `Bearer ${token}`;
 
     try {
       await guard.get('/user');
       next(); 
     } catch (error) {
       router.replace('/login');
       localStorage.removeItem('token');
     }
 
   } else {
     next();
   }
 });

 export default router