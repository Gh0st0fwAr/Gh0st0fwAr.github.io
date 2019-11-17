<template lang="pug">
   .groups__skills
      .groups__skillrow
        input(type="text" placeholder="Git" v-model='copyskill.title').groups__skill.input--active
        span.error {{ this.validation.firstError('copyskill.title') }}
        input(type="text" placeholder="50" max="100" v-model="copyskill.percent").groups__percent.input--active
        span.error {{ this.validation.firstError('copyskill.percent') }}
        .groups__edit
          label.editbtn
            input(type="checkbox" @click="editRow" v-model="isChecked").someinput
            span.input__editbtn
          button(type="button" @click="deleteRow").deletebtn
            svg
</template>

<script>
import { Validator } from 'simple-vue-validator';
import $axios from "@/requests";
export default {
   data() {
     	return {
        copyskill: {...this.skill},
        isChecked: false,
   	}
   },
   props: {
    	 skill: Object,
   },
   computed: {
        titleError() {
            return this.validation.firstError('skill.title')
        },
        percentError() {
            return this.validation.firstError('skill.percent')
        }
    },
    validators: {
      'copyskill.title': function (value) {
        return Validator.value(value).required();
      },
      'copyskill.percent': function (value) {
        return Validator.value(value).required();
      }
    },
    methods: {
     	deleteRow() {
       	$axios.delete(`/skills/${this.copyskill.id}`).then(() => {
				 this.$emit('delete-row', this.copyskill);
			})
      },
      editRow() {
        this.$validate().then(success => {
          if (success) {
            $axios.post(`/skills/${this.copyskill.id}`, this.copyskill).then(response => {
              alert("Скилл изменен");
              this.isChecked = false;          
            });
          
          }
        });
      }
   },
}
</script>