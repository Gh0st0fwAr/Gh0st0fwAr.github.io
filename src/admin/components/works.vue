<template lang="pug">
section.works-admin.section-admin
	.container-admin.container-works
		.titlebox
			.titlebox__about Блок "Обо мне"
		sitesForm(
			:is-edit="isEdit"
			:for-edit="forEdit"
			:is-ready="isReady"
			@cancel-sites="isNot"
		)
		.sites
			addSites(@activate-form="activateForm")
			siteCard(
				v-for="work in works" 
				:work="work"
				@delete-card="cardDelete"
				@edit-card="cardEdit"
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
			forEdit: {},
			isEdit: false,
			isReady: false,
		}
	},
	
	async created() {
		const { data } = await $axios.get('/works/216');
		this.works = data;
	},
	methods: {
		isNot() {
			this.isReady = false;
		},
		activateForm() {
			this.isReady = true;
		},
		cardDelete(someCard) {
         this.works.pop(someCard);
		},
		cardEdit(editedCard) {
			this.isEdit = true;
			this.isReady = true;
			this.forEdit = editedCard;
		},
	},
}
</script>