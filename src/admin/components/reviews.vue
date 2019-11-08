<template lang="pug">
   section.works-admin.section-admin.reviews-admin
      .container-admin.container-works
        .titlebox
          .titlebox__about Блок "Отзывы"
        form.works-form
          .titlerow
            .title-admin Новый отзыв
          .works-add.reviews__add
            .reviews__imgwrap
              .reviews__image
                img(src="../../images/content/zaglushka.jpg").reviews__stub
              button(type="button").works-add__undo Добавить фото
            .reviews__desc
              .reviews__row
                label.works-add__row.reviews-add__row
                  .works-add__title Имя автора
                  input(type="text" placeholder="Ковальчук Дмитрий").works-add__text
                label.works-add__row.reviews-add__row
                  .works-add__title Титул автора
                  input(type="text" placeholder="Основатель LoftSchool").works-add__text
              label.works-add__row
                .works-add__title Отзыв
                textarea(cols="30", rows="10" placeholder="Этот парень проходил обучение бла бла").reviews-add__textarea
              .works-add__save
                button(type="button").works-add__undo Отмена
                button(type="button").works-add__savebtn Сохранить
        .sites
          .sites__add
            .sites__addbutton +
            .sites__addtitle Добавить отзыв
          .sites__prev.reviews__prev
            .prev__imgbox.prev__imgbox--comments
              .prev__imgwrap.prev__imgwrap--comments
                img(src="../../images/content/comm1.jpg").prev__img
              .prev__titlewrap
                .prev__title.prev__title--comments Владимир Сабанцев
                .prev__position.prev__position--comments Преподаватель
            .prev__desc.prev__desc--comments
              p.prev__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool!
                |4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            .prev__btns.prev__btns--comments
              button(type="button").prev__editbtn.prevbtn Править
              button(type="button").prev__deletebtn.prevbtn Удалить
</template>