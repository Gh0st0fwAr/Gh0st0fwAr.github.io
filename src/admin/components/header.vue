<template lang="pug">
   header.header-admin
      .container-admin.container-reviews.container-admin-header
         .header-admin__person
            .person__img
               img(src="../../images/content/myface.jpg").person__pic
            .person__title Даниил Вирин
         .header-admin__desc Панель администрирования
         .header-admin__leave 
            a.leave__link(@click.prevent="logOut") Выйти
</template>

<script>
import $axios from '@/requests';
import $router from "@/router";
export default {
   methods: {      
      logOut() {
         $axios.post('https://webdev-api.loftschool.com/logout');
         this.$router.replace('/login');
      }
   },
}
</script>
