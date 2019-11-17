<template lang="pug">
   li.prev__tag {{tech}} 
      
</template>

<script>
import $axios from "@/requests";
export default {
   data() {
      return {
      }
   },
   props: {
      tech: String,
   }
   
}
</script>