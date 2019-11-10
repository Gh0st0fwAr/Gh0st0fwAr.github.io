<template lang="pug">
   .groups__titlerow
      input(type="text" v-model="formData.title").groups__name.input--active 
      .groups__edit
        label.editbtn
          input(type="checkbox" @click="submitForm").someinput
          span.input__editbtn
        button(type="button" @click="deleteCard").deletebtn
          svg
</template>

<script>
import $axios from "@/requests";
export default {
   data() {
      return {
         formData: {
            title: this.cat.category
         },
         copyCat: {...this.cat},
      }
   },
   methods: {
      async submitForm() {
         $axios.post(`/categories/${this.copyCat.id}`, this.formData);
      },
      deleteCard() {
         $axios.delete(`/categories/${this.copyCat.id}`).then(() => {
            this.$emit('delete-card');
         })
      }
   },
   props: {
      cat: Object,
   }
}
</script>