<template lang="pug">
   .groups__skills
      .groups__skillrow
        input(type="text" value="Git").groups__skill.input--active
        input(type="text" value="50").groups__percent.input--active
        .groups__edit
          label.editbtn
            input(type="checkbox").someinput
            span.input__editbtn
          button(type="button").deletebtn
            svg
</template>

<script>
import $axios from "@/requests";
export default {
   
}
</script>