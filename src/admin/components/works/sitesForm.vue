<template lang="pug">
   form.works-form
      .titlerow
         .title-admin Редактирование Работы
      .works-add
         .works-add__imgwrap
            .works-add__image
               .works-add__imgdesc Перетащите или загрузите для загрузки изображения
               a().works-add__btn Загрузить
                  input(type="file" accept="image/jpeg" @change="processFile($event)")
         .works-add__desc
            label.works-add__row
               .works-add__title Название
               input(type="text" placeholder="Название работы" v-model="formData.title").works-add__text
            label.works-add__row
               .works-add__title Ссылка
               input(type="text" placeholder="https://www.yoursite.ru" v-model="formData.link").works-add__text
            label.works-add__row
               .works-add__title Описание
               textarea(cols="30", rows="10" placeholder="Описание сайта" v-model="formData.description").works-add__text.works-add--textarea
            label.works-add__row
               .works-add__title Добавление тэга
               input(type="text" placeholder="Jquery, Vue.js, HTML5" v-model="formData.techs").works-add__text
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
               button(type="button" @click="submitForm").works-add__savebtn Сохранить
</template>

<script>
import $axios from "@/requests";
export default {
   data() {
      return {
         formData: {
            title: "",
            techs: "",
            photo: 0,
            link: "",
            description: "",

         }
      }
   },
   methods: {
      processFile(event) {
         this.formData.photo = event.target.files[0];
         let config = {
            header : {
               'Content-Type' : 'image/jpeg'
            }
         }
      },
      submitForm() {
         let data = new FormData();
         data.append('photo', this.formData.photo);
         data.append('title', this.formData.title);
         data.append('techs', this.formData.techs);
         data.append('link', this.formData.link);
         data.append('description', this.formData.description);
         console.log(data);
         $axios.post('/works', data).then(response => {
            console.log(response.data);
            this.formData.title = "";
            this.formData.techs = "";
            this.formData.photo = 0;
            this.formData.link = "";
            this.formData.description = "";
         })
      }
   },

}
</script>