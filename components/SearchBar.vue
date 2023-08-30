<script setup>
const emit = defineEmits(['search']);
const searchQuery = ref('');

const handleSearch = () => {
	// Emit the search query to the parent component
	emit('search', searchQuery.value);
};
</script>

<template>
	<div>
		<img src="~assets/icons/ui/ic_search.svg" alt="">
		<input
			type="text"
			placeholder="Type in character name..."
			v-model="searchQuery"
			@input="handleSearch"
		>
	</div>
</template>

<style scoped>
	img {
		opacity: .4;
	}
	div {
		display: flex;
		gap: 16px;

		height: 40px;

		border-radius: 28px;
		background: #292929;

		padding: 10px 20px;
	}
	input {
		border: none;
		outline: none;
		border-radius: 28px;

		background: transparent;

		min-width: 400px;

		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;

		color: white;
	}
</style>


