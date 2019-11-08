<template lang="pug">
   li.groupsgrid__item
      form.groups(action="")
        .groups__wrapper
          cardTitle(
             :cat="cat"
          )
          skillItem
          skillAdd(
            :cat="cat"
          )
</template>

<script>
import $axios from "@/requests";
export default {
   components: {
      cardTitle: () => import("./cardTitle.vue"),
      skillAdd: () => import("./skillAdd.vue"),
      skillItem: () => import("./skillItem"),
   },
   data() {
     return {
       skill: [],
     }
   },
   props: {
      cat: Object, 
   },
   async created() {     
      const { dataSkill } = await $axios.get("/skills/216").then(response => {
        this.$emit('skillAdded', response.data);
      });
      this.skill = dataSkill;
   }
}
</script>