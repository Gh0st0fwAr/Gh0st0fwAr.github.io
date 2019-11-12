<template lang="pug">
   form(v-bind:class="{activeform: isActiveForm}").works-form
      .titlerow
         .title-admin Редактирование Работы
      .works-add
         .works-add__imgwrap()
            .works-add__image()
               img.works-add__imgpreview(:src="filePreview" v-show="filePreview")
               .works-add__imgdesc(v-show="!filePreview") Перетащите или загрузите для загрузки изображения
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
               button(type="submit" @click.prevent="clearForm").works-add__undo Отмена
               button(type="button" @click="submitForm").works-add__savebtn Сохранить
</template>

<script>
import { Validator } from 'simple-vue-validator';
import $axios from "@/requests";
export default {
   data() {
      return {
         formData: {
            title: "",
            techs: "",
            photo: "",
            link: "",
            description: "",

         },
         filePreview: "",
         isActiveForm: false,
      }
   },
   props: {
      isEdit: Boolean,
      forEdit: Object,
      isReady: Boolean,
   },
   validators: {
      'formData.title': function(value) {
         return Validator.value(value).required();
      },
      'formData.techs': function(value) {
         return Validator.value(value).required();
      },
      'formData.link': function(value) {
         return Validator.value(value).required();
      },
      'formData.description': function(value) {
         return Validator.value(value).required();
      },
   },
   watch: {
      forEdit: {
         immediate: true,
         handler (newVal, oldVal) {
            this.editFill();
         }
      },
      isReady: {
         immediate: true,
         handler (newVal, oldVal) {
            this.isActiveForm = newVal;
         }
      }
   },
   methods: {
      processFile(event) {
         this.formData.photo = event.target.files[0];
         this.renderFile(this.formData.photo).then((f) => {
            this.filePreview = f
        })
      },
      selectImage(file) {
         this.file = file;
         let reader = new FileReader();
         reader.onload = this.formData.photo;
         reader.readAsDataURL(file);
         console.log(file);
      },
      renderFile(file) {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
          try {
              reader.readAsDataURL(file);
              reader.onloadend = () => {
                  resolve(reader.result);
              };
          } catch (error) {
              throw new Error("Ошибка при чтении файла");
          }
      });
    },
      submitForm() {
         if (this.isEdit === true) {
            let data = new FormData();
            data.append('photo', this.formData.photo);
            data.append('title', this.formData.title);
            data.append('techs', this.formData.techs);
            data.append('link', this.formData.link);
            data.append('description', this.formData.description);
            $axios.post(`/works/${this.forEdit.id}`, data).then(response => {
            this.formData.title = "";
            this.formData.techs = "";
            this.formData.photo = 0;
            this.formData.link = "";
            this.formData.description = "";
         }) } else {
         let data = new FormData();
         data.append('photo', this.formData.photo);
         data.append('title', this.formData.title);
         data.append('techs', this.formData.techs);
         data.append('link', this.formData.link);
         data.append('description', this.formData.description);
         this.$validate().then(success => {
            if (success) {
               $axios.post('/works', data).then(response => {
                  this.formData.title = "";
                  this.formData.techs = "";
                  this.formData.photo = 0;
                  this.formData.link = "";
                  this.formData.description = "";
               });
            } else {
               console.log("Validation error");
            }
         })
         }
         
      },
      editFill() {         
         this.formData.title = this.forEdit.title;
         this.formData.techs = this.forEdit.techs;
         this.formData.photo = this.forEdit.photo;
         this.formData.link = this.forEdit.link;
         this.formData.description = this.forEdit.description;      
      },
      clearForm() {
         this.formData.title = "";
         this.formData.techs = "";
         this.formData.photo = 0;
         this.formData.link = "";
         this.formData.description = "";
         this.isActiveForm = false;
         this.$emit('cancel-sites');
      }
      
   },

}
</script>