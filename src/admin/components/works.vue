<template lang="pug">
section.works-admin.section-admin
	.container-admin.container-works
		.titlebox
			.titlebox__about Блок "Обо мне"
		sitesForm()
		.sites
			addSites()
			siteCard(
				v-for="work in works" 
				:work="work"
			)
</template>

<script>
import $axios from "@/requests";
export default {
	components: {
		addSites: () => import ("./works/addSites.vue"),
		siteCard: () => import ("./works/siteCard.vue"),
		sitesForm: () => import ("./works/sitesForm")
	},
	data() {
		return {
			works: [],
		}
	},
	async created() {
		const { data } = await $axios.get('/works/216');
		this.works = data;
	},
}
</script>