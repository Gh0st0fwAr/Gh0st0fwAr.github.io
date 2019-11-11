<template lang="pug">
   .sites__prev.sites__prev--disabled
      .prev__imgbox
         img(src="../../../images/content/prev1.jpg").prev__img
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