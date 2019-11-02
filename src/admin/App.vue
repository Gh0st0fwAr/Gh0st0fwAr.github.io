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
        li.breadcrumbs__item.breadcrumbs__item--active
          a.breadcrumbs__link Обо мне
        li.breadcrumbs__item
          a.breadcrumbs__link Работы
        li.breadcrumbs__item
          a.breadcrumbs__link Отзывы
    section.about-admin
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
                  input(type="text" placeholder="Новый навык").groups__addskill
                  input(type="text" placeholder="100").groups__addpercent
                  button(type="button").groups__addbtn
                    svg(viewBox="0 0 38 38" preserveAspectRatio="xMidYMid")
                      circle(r="16" cx="50%" cy="50%" fill="url(#addbtn)")
                      linearGradient#addbtn(y1='0%' y2='100%').admin-addbtn
                        stop(offset="0%" stop-color="#006aed")
                        stop(offset="100%" stop-color="#3f35cb")
                      text(x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="26" font-weight="300" font-family="OpenSans, sans-serif" fill="white") +

</template>

<style src="./../styles/main.pcss">
</style>
