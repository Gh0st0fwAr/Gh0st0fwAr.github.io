<template lang="pug">
	li.groupsgrid__item
		form.groups(action="")
			.groups__wrapper
				cardTitle(
					:cat="cat"
					@delete-card="testVar"
				)
				skillItem(
					:skill="skill"
					v-for="skill in skills"
					@delete-row="rowDelete"
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
		addSkill(newSkill) {
			this.skills.push(newSkill);
		},
		rowDelete(someSkill) {
			this.skills.pop(someSkill);
			console.log(someSkill);
		},
		
	},


}
</script>