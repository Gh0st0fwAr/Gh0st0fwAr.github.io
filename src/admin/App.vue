<template lang="pug">
  .subwrapper-admin
    appHeader
    appNav
    router-view
      //- aboutPage
      //- worksPage
      //- reviewsPage
                 
                
</template>

<script>
import { Validator } from 'simple-vue-validator'

export default {
  components: {
    appHeader: () => import("./components/header.vue"),
    appNav: () => import("./components/nav"),
    aboutPage: () => import("./components/about"),
    worksPage: () => import("./components/works"),
    reviewsPage: () => import("./components/reviews"),
    loginBlock: () => import("./components/login")

  },
}
</script>

<style src="./../styles/main.pcss">
</style>
