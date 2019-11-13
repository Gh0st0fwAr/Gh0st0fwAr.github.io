<template lang="pug">
nav.breadcrumbs 
   ul.breadcrumbs__list
      //- li.breadcrumbs__item
      //-    a.breadcrumbs__link Обо мне
      li.breadcrumbs__item
         router-link(
            to="/"
         ).breadcrumbs__link Обо мне
      li.breadcrumbs__item
         //- a.breadcrumbs__link Работы
         router-link(
            to="/works"
         ).breadcrumbs__link Работы
      li.breadcrumbs__item
         //- a.breadcrumbs__link Отзывы 
         router-link(
            to="/reviews"
         ).breadcrumbs__link Отзывы
</template>

