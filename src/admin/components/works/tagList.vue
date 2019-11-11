<template lang="pug">
   ul.prev__tags
      tagItem(
         v-for="tech in techsArray"
         :tech="tech"
      )
</template>

<script>
import $axios from "@/requests";
export default {
   components: {
      tagItem: () => import("./tagItem.vue"),
   },
   data() {
      return {
         techsArray: [],
         copyTech: this.techs,
      }
   },
   props: {
      techs: String,
   },
   methods: {
      arrSplit() {
         this.techsArray = this.copyTech.split(', ', 3);
         console.log(this.techs.split);
      }
   },
   created() {
      this.techsArray = this.copyTech.split(', ', 3);
      console.log(this.techs.split);
   },
}
</script>