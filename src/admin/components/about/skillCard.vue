<template lang="pug">
	li.groupsgrid__item
		form.groups(action="")
			.groups__wrapper
				cardTitle(
					:cat="cat"					
					@delete-card="cardIndex"
				)
				skillItem(
					:skill="skill"
					v-for="skill in skills"
					@delete-row="rowDelete"
					:key="skill.id"
				)
				skillAdd(
					:cat="cat"
					@skill-added="addSkill"
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
			skills: [],
		}
	},
	props: {
		cat: Object, 
	},
	async created() {     
		const { data } = await $axios.get("/skills/216");
		const filteredSkills = data.filter(el => {
			return (el.category === this.cat.id)
		})
		this.skills = filteredSkills;
	},
	methods: {
		cardIndex(emitCard) {
			this.$emit('delete-card', emitCard);
		},
		addSkill(newSkill) {
			this.skills.push(newSkill);
		},
		rowDelete(someSkill) {
			let deleteIndex = this.skills.findIndex((el) => {
				return el.id === someSkill.id;
			});
			console.log(deleteIndex);
			this.skills.splice(deleteIndex, 1);
		},
		
	},


}
</script>