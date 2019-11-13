<template lang="pug">
   .groups__titlerow
      input(type="text" v-model="formdata.title").groups__name.input--active 
      span.error {{ this.validation.firstError('formdata.title') }}
      .groups__edit
        label.editbtn
          input(type="checkbox" @click="submitForm").someinput
          span.input__editbtn
        button(type="button" @click="deleteCard").deletebtn
          svg
</template>

<script>
import { Validator } from 'simple-vue-validator';
import $axios from "@/requests";
export default {
   data() {
      return {
         formdata: {
            title: this.cat.category
         },
         copyCat: {...this.cat},
      }
   },
   computed: {
        titleError() {
            return this.validation.firstError('formdata.title')
        },
   },
    validators: {
      'formdata.title': function(value) {
         return Validator.value(value).required();
      },
   },
   methods: {
      submitForm() {
         this.$validate().then(success => {
            if (success) {
               $axios.post(`/categories/${this.copyCat.id}`, this.formData);
               alert('Validation succeeded!')
            } else {
               console.log("Validation error");
            }
         })
      },
      deleteCard() {
         $axios.delete(`/categories/${this.copyCat.id}`).then(() => {
            this.$emit('delete-card', this.cat.id);
         })
      }
   },
   props: {
      cat: Object,
   }
}
</script>