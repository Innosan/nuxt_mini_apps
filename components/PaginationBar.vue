<script setup lang="ts">
import {VueAwesomePaginate} from "vue-awesome-paginate";

defineProps({
	totalItems: {
		type: Number,
		required: true,
	},
	itemsPerPage: {
		type: Number,
		required: true,
	},
})

const emit = defineEmits(['page']);

const currentPage = ref(1);
const pageStart = ref(0)
const pageEnd = ref(20)

const onClickHandler = () => {
	pageStart.value = (currentPage.value - 1) * 20;
	pageEnd.value = pageStart.value + 20;

	emit('page', {
		pageStart: pageStart.value,
		pageEnd: pageEnd.value,
	})

	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
};
</script>

<template>
	<VueAwesomePaginate
		:total-items="totalItems"
		:items-per-page="itemsPerPage"
		:max-pages-shown="5"
		v-model="currentPage"
		:on-click="onClickHandler"
	/>
</template>

<style lang="scss">
	.pagination-container {
		display: flex;

		column-gap: 10px;
		margin-bottom: 60px;
	}

	.paginate-buttons {
		height: 60px;
		width: 60px;
		border-radius: 16px;
		cursor: pointer;
		background-color: #292929;
		border: 1px solid rgb(217, 217, 217);
		color: white;
		font-weight: 800;
		font-size: 20px;

		transition: .3s;

		&:hover {
			opacity: .8;
		}
	}

	.active-page {
		background-color: #F85454;
		color: white;
		border-radius: 36px;

		transition: .3s;

		&:hover {
			background-color: #dc4a4a;
		}
	}
</style>
