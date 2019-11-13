<template lang="pug">
.aboutcontainer
	appHeader
	appNav
	section.works-admin.section-admin.reviews-admin
		.container-admin.container-works
			.titlebox
				.titlebox__about Блок "Отзывы"
			reviewsForm(
				:is-edit="isEdit"
				:for-edit="forEdit"
				:is-ready="isReady"
				@cancel-sites="isNot"
			)
			.sites
				addReviews(@activate-form="activateForm")
				reviewCard(
					v-for="review in reviews"
					:key="review.id"
					:reviews="review"
					@delete-card="cardDelete"
					@edit-card="cardEdit"
				)
</template>

<script>
import $axios from "@/requests";
export default {
	components: {
      appHeader: () => import("../components/header.vue"),
      appNav: () => import("../components/nav.vue"),  
		addReviews: () => import ("./reviews/addReviews.vue"),
		reviewCard: () => import ("./reviews/reviewCard.vue"),
		reviewsForm: () => import ("./reviews/reviewsForm.vue")
	},
	data() {
		return {
			reviews: [],
			forEdit: {},
			isEdit: false,
			isReady: false,
		}
	},
	async created() {
		const { data } = await $axios.get('/reviews/216');
		this.reviews = data;
	},
	methods: {
		cardDelete(someCard) {
			this.reviews.pop(someCard);
		},
		isNot() {
			this.isReady = false;
			this.isEdit = false;
		},
		activateForm() {
			this.isReady = true;
		},
		cardEdit(editedCard) {
			this.isEdit = true;
			this.isReady = true;
			this.forEdit = editedCard;
		},
	},
}
</script>