<template lang="pug">
   .sites__prev
      .prev__imgbox
         img(:src="`https://webdev-api.loftschool.com/${work.photo}`").prev__img
         tagList(:techs="work.techs")
      .prev__desc.prev__desc--works
         .prev__title {{ work.title }}
         p.prev__text {{ work.description }}
         a.prev__link(href="#") {{ work.link }}
      .prev__btns
         button(type="button").prev__editbtn.prevbtn Править
         button(type="button").prev__deletebtn.prevbtn Удалить   
</template>

<script>
import $axios from "@/requests";
export default {
   components: {
     tagList: () => import("./tagList.vue"),
   },
	data() {
		return {
         work: [],
		}
   },
   methods: {
      someMethod() {
         console.log(this.work.photo);
      }
   },
   props: {
      work: Object,
   }
}
</script>