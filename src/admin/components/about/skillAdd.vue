<template lang="pug">
   .groups__addrow
      input(type="text" placeholder="Новый навык" v-model="formData.title").groups__addskill.input--active
      input(type="text" placeholder="100" v-model="formData.percent").groups__addpercent.input--active
      button(type="button" @click="submitForm").groups__addbtn
        svg(viewBox="0 0 38 38" preserveAspectRatio="xMidYMid")
          circle(r="16" cx="50%" cy="50%" fill="url(#addbtn)")
          linearGradient#addbtn(y1='0%' y2='100%').admin-addbtn
            stop(offset="0%" stop-color="#006aed")
            stop(offset="100%" stop-color="#3f35cb")
          text(x="50%" y="50%" text-anchor="middle" 
          dominant-baseline="central" font-size="26" font-weight="300" 
          font-family="OpenSans, sans-serif" fill="white") +
</template>

<script>
import $axios from "@/requests";
export default {
   data() {
      return {
         formData : {
            title: "",
            percent: "",
         },
         copyCat: {...this.cat},
         copySkill: {...this.skill},
      }
   },
   methods: {
      async submitForm() {
         $axios.post('/skills', {
            title: this.formData.title,
            percent: this.formData.percent,
            category: this.copyCat.id,
         });         
      }
   },
   props: {
      cat: Object,
      skill: Object,
   },
   
}
</script>