<template lang="pug">
  section.reviews
    header.header-admin
      .container-admin.container-reviews
        .header-admin__person
          .person__img
            img(src="../images/content/myface.jpg").person__pic
          .person__title Даниил Вирин
        .header-admin__desc Панель администрирования
        .header-admin__leave 
          a.leave__link Выйти
    nav.breadcrumbs 
      ul.breadcrumbs__list
        li.breadcrumbs__item
          a.breadcrumbs__link Обо мне
        li.breadcrumbs__item
          a.breadcrumbs__link Работы
        li.breadcrumbs__item
          a.breadcrumbs__link Отзывы
</template>

<style src="./../styles/main.pcss">
</style>
