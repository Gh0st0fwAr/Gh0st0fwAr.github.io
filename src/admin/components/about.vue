<template lang="pug">
   section.about-admin.section-admin
      .container-admin.container-about
        .titlebox
          .titlebox__about Блок "Обо мне"
          a.titlebox__add
            button(type="button").titlebox__button
              svg(viewBox="0 0 38 38" preserveAspectRatio="xMidYMid")
                circle(r="16" cx="50%" cy="50%" fill="url(#addbtn)")
                linearGradient#addbtn(y1='0%' y2='100%').admin-addbtn
                  stop(offset="0%" stop-color="#006aed")
                  stop(offset="100%" stop-color="#3f35cb")
                text(x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="26" font-weight="300" font-family="OpenSans, sans-serif" fill="white") +
            .titlebox__addtitle Добавить группу
        ul.groupsgrid
          skillCard(
             v-for="cat in categories" :cat="cat"
          )
</template>

<script>
import $axios from "@/requests";
export default {
   components: {
      skillCard: () => import("./about/skillCard.vue"),
   },
   data() {
      return {
         categories: [],
         skill: [],
      }
   },
   async created() {
      const { data } = await $axios.get('/categories');
      this.categories = data;
      const { dataSkill } = await $axios.get("/skills/216");
      this.skill = dataSkill;
   },
}
</script>