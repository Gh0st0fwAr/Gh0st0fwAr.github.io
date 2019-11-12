<template lang="pug">
   form(v-bind:class="{activeform: isActiveForm}").works-form
      .titlerow
         .title-admin Новый отзыв
      .works-add.reviews__add
         .reviews__imgwrap
            .reviews__image
               img(src="../../../images/content/zaglushka.jpg").reviews__stub
            a().works-add__undo.reviews-avatar Загрузить
               input(type="file" accept="image/jpeg" @change="processFile($event)")
         .reviews__desc
            .reviews__row
               label.works-add__row.reviews-add__row
                  .works-add__title Имя автора
                  input(type="text" placeholder="Ковальчук Дмитрий" v-model="formData.author").works-add__text
               label.works-add__row.reviews-add__row
                  .works-add__title Титул автора
                  input(type="text" placeholder="Основатель LoftSchool" v-model="formData.occ").works-add__text
            label.works-add__row
               .works-add__title Отзыв
               textarea(cols="30", rows="10" placeholder="Этот парень проходил обучение бла бла" v-model="formData.text").reviews-add__textarea
            .works-add__save
               button(type="button" @click.prevent="clearForm").works-add__undo Отмена
               button(type="button" @click="submitForm").works-add__savebtn Сохранить
</template>

<script>
import $axios from "@/requests";
export default {
   data() {
      return {
         formData: {
            author: "",
            occ: "",
            photo: 0,
            text: "",
         },
         isActiveForm: false,
      }
   },
   props: {
      isEdit: Boolean,
      forEdit: Object,
      isReady: Boolean,
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
         let config = {
            header : {
               'Content-Type' : 'image/jpeg'
            }
         };
         this.selectImage(event.target.files[0]);         
      },
      selectImage(file) {
         this.file = file;
         let reader = new FileReader();
         reader.onload = this.formData.photo;
         reader.readAsDataURL(file);
         console.log(file);
      },
      submitForm() {
         if (this.isEdit === true) {
            let data = new FormData();
            data.append('photo', this.formData.photo);
            data.append('title', this.formData.author);
            data.append('occ', this.formData.occ);
            data.append('text', this.formData.text);
            $axios.post(`/reviews/${this.forEdit.id}`, data).then(response => {
            this.formData.author = "";
            this.formData.occ = "";
            this.formData.photo = 0;
            this.formData.text = "";
         }) } else {
         let data = new FormData();
         data.append('photo', this.formData.photo);
         data.append('author', this.formData.author);
         data.append('occ', this.formData.occ);
         data.append('text', this.formData.text);
         console.log(data);
         $axios.post('/reviews', data).then(response => {
            this.formData.author = "";
            this.formData.occ = "";
            this.formData.photo = 0;
            this.formData.text = "";
         })}
      },
      editFill() {         
         this.formData.author = this.forEdit.author;
         this.formData.occ = this.forEdit.occ;
         this.formData.photo = this.forEdit.photo;
         this.formData.text = this.forEdit.text;      
      },
      clearForm() {
         this.formData.author = "";
         this.formData.occ = "";
         this.formData.photo = 0;
         this.formData.text = "";
         this.isActiveForm = false;
         this.$emit('cancel-sites');
      }
      
   },

}
</script>