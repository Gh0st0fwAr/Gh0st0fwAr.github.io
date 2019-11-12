<template lang="pug">
   .groups__skills
      .groups__skillrow
        input(type="text" placeholder="Git" v-model='copySkill.title').groups__skill.input--active
        input(type="text" placeholder="50" v-model="copySkill.percent").groups__percent.input--active
        .groups__edit
          label.editbtn
            input(type="checkbox" @click="editRow").someinput
            span.input__editbtn
          button(type="button" @click="deleteRow").deletebtn
            svg
</template>

<script>
import $axios from "@/requests";
export default {
   data() {
     	return {
        copySkill: {...this.skill},
   	}
   },
   props: {
    	 skill: Object,
   },
   methods: {
     	deleteRow() {
       	$axios.delete(`/skills/${this.copySkill.id}`).then(() => {
				 this.$emit('delete-row', this.copySkill);
			})
      },
      editRow() {
        $axios.post(`/skills/${this.copySkill.id}`, this.copySkill);
      }
   },
}
</script>