<template lang="pug">
   .groups__titlerow
      input(type="text" v-model="copyCat.category").groups__name.input--active 
      .groups__edit
        label.editbtn
          input(type="checkbox" @click="submitForm").someinput
          span.input__editbtn
        button(type="button").deletebtn
          svg
</template>

<script>
import $axios from "@/requests";
export default {
   data() {
      return {
         formData: {
            title: ""
         },
         copyCat: {...this.cat},
      }
   },
   methods: {
      async submitForm() {
         $axios.post('/categories', this.formData);
      }
   },
   props: {
      cat: Object,
   }
}
</script>