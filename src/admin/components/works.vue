<template lang="pug">
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
             button(type="submit").works-add__undo Отмена
             button(type="submit").works-add__savebtn Сохранить
     .sites
       .sites__add
         .sites__addbutton +
         .sites__addtitle Добавить работы
       .sites__prev.sites__prev--disabled
         .prev__imgbox
           img(src="../../images/content/prev1.jpg").prev__img
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
</template>