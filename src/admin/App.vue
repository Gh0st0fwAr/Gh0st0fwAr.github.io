<template lang="pug">
  section.reviews
    header.header-admin
      .container-admin.container-reviews.container-admin-header
        .header-admin__person
          .person__img
            img(src="../images/content/myface.jpg").person__pic
          .person__title Даниил Вирин
        .header-admin__desc Панель администрирования
        .header-admin__leave 
          a.leave__link Выйти
    nav.breadcrumbs 
      ul.breadcrumbs__list
        li.breadcrumbs__item.breadcrumbs__item--active
          a.breadcrumbs__link Обо мне
        li.breadcrumbs__item
          a.breadcrumbs__link Работы
        li.breadcrumbs__item
          a.breadcrumbs__link Отзывы
    section.about-admin.section-admin
      .container-admin.container-about
        .titlebox
          .titlebox__about Блок "Обо мне"
          a.titlebox__add
            button(type="button").titlebox__button
              svg(viewBox="0 0 38 38" preserveAspectRatio="xMidYMid")
                circle(r="16" cx="50%" cy="50%" fill="url(#addbtn)")
                linearGradient#addbtn(y1='0%' y2='100%').admin-addbtn
                  stop(offset="0%" stop-color="#006aed")
                  stop(offset="100%" stop-color="#3f35cb")
                text(x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="26" font-weight="300" font-family="OpenSans, sans-serif" fill="white") +
            .titlebox__addtitle Добавить группу
        ul.groupsgrid
          li.groupsgrid__item
            form.groups(action="")
              .groups__wrapper
                .groups__titlerow
                  input(type="text" value="Workflow").groups__name.input--active 
                  .groups__edit
                    label.editbtn
                      input(type="checkbox").someinput
                      span.input__editbtn
                    button(type="button").deletebtn
                      svg
                .groups__skills
                  .groups__skillrow
                    input(type="text" value="Git").groups__skill.input--active
                    input(type="text" value="50").groups__percent.input--active
                    .groups__edit
                      label.editbtn
                        input(type="checkbox").someinput
                        span.input__editbtn
                      button(type="button").deletebtn
                        svg
                .groups__skills
                  .groups__skillrow
                    input(type="text" value="Git").groups__skill
                    input(type="text" value="50").groups__percent
                    .groups__edit
                      label.editbtn
                        input(type="checkbox").someinput
                        span.input__editbtn
                      button(type="button").deletebtn
                        svg
                .groups__skills
                  .groups__skillrow
                    input(type="text" value="Git").groups__skill
                    input(type="text" value="50").groups__percent
                    .groups__edit
                      label.editbtn
                        input(type="checkbox").someinput
                        span.input__editbtn
                      button(type="button").deletebtn
                        svg
                .groups__skills
                  .groups__skillrow
                    input(type="text" value="Git").groups__skill
                    input(type="text" value="50").groups__percent
                    .groups__edit
                      label.editbtn
                        input(type="checkbox").someinput
                        span.input__editbtn
                      button(type="button").deletebtn
                        svg
                .groups__addrow
                  input(type="text" placeholder="Новый навык").groups__addskill.input--active
                  input(type="text" placeholder="100").groups__addpercent.input--active
                  button(type="button").groups__addbtn
                    svg(viewBox="0 0 38 38" preserveAspectRatio="xMidYMid")
                      circle(r="16" cx="50%" cy="50%" fill="url(#addbtn)")
                      linearGradient#addbtn(y1='0%' y2='100%').admin-addbtn
                        stop(offset="0%" stop-color="#006aed")
                        stop(offset="100%" stop-color="#3f35cb")
                      text(x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="26" font-weight="300" font-family="OpenSans, sans-serif" fill="white") +
    section.works-admin.section-admin
      .container-admin.container-works
        .titlebox
          .titlebox__about Блок "Обо мне"
        form.works-form
          .titlerow
            .title-admin Редактирование Работы
          .works-add
            .works-add__imgwrap
              .works-add__image
                .works-add__imgdesc Перетащите или загрузите для загрузки изображения
                button(type="button").works-add__btn Загрузить
            .works-add__desc
              label.works-add__row
                .works-add__title Название
                input(type="text" placeholder="Название работы").works-add__text
              label.works-add__row
                .works-add__title Ссылка
                input(type="text" placeholder="https://www.yoursite.ru").works-add__text
              label.works-add__row
                .works-add__title Описание
                textarea(cols="30", rows="10" placeholder="Описание сайта").works-add__text.works-add--textarea
              label.works-add__row
                .works-add__title Добавление тэга
                input(type="text" placeholder="Jquery, Vue.js, HTML5").works-add__text
              ul.works-add__tags
                li.works-add__tag HTML
                  .works-add__tag--text
                  button(type="button").works-add__tag--btn                  
                li.works-add__tag CSS
                  .works-add__tag--text
                  button(type="button").works-add__tag--btn 
                li.works-add__tag Javascript
                  .works-add__tag--text
                  button(type="button").works-add__tag--btn 
              .works-add__save
                button(type="button").works-add__undo Отмена
                button(type="button").works-add__savebtn Сохранить
        .sites
          .sites__add
            .sites__addbutton +
            .sites__addtitle Добавить работы
          .sites__prev.sites__prev--disabled
            .prev__imgbox
              img(src="../images/content/prev1.jpg").prev__img
              ul.prev__tags
                li.prev__tag HTML
                li.prev__tag CSS
                li.prev__tag Javascript
            .prev__desc.prev__desc--works
              .prev__title Сайт школы образования
              p.prev__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool!
                |4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a.prev__link(href="#") http://loftschool.ru
            .prev__btns
              button(type="button").prev__editbtn.prevbtn Править
              button(type="button").prev__deletebtn.prevbtn Удалить
          .sites__prev
            .prev__imgbox
              img(src="../images/content/prev1.jpg").prev__img
              ul.prev__tags
                li.prev__tag HTML
                li.prev__tag CSS
                li.prev__tag Javascript
            .prev__desc.prev__desc--works
              .prev__title Сайт школы образования
              p.prev__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool!
                |4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a.prev__link(href="#") http://loftschool.ru
            .prev__btns
              button(type="button").prev__editbtn.prevbtn Править
              button(type="button").prev__deletebtn.prevbtn Удалить
          .sites__prev
            .prev__imgbox
              img(src="../images/content/prev1.jpg").prev__img
              ul.prev__tags
                li.prev__tag HTML
                li.prev__tag CSS
                li.prev__tag Javascript
            .prev__desc.prev__desc--works
              .prev__title Сайт школы образования
              p.prev__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool!
                |4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              a.prev__link(href="#") http://loftschool.ru
            .prev__btns
              button(type="button").prev__editbtn.prevbtn Править
              button(type="button").prev__deletebtn.prevbtn Удалить

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
                img(src="../images/content/zaglushka.jpg").reviews__stub
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
                img(src="../images/content/comm1.jpg").prev__img
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

<style src="./../styles/main.pcss">
</style>
