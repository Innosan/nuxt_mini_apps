<script setup lang="ts">
defineProps({
	navUrl: String,
	iconUrl: String,
	backgroundColor: String
})
</script>

<template>
	<NuxtLink :to="navUrl" :style="`background-color: ${backgroundColor}`">
		<img :src="`/_nuxt/assets/icons/ui/${iconUrl}`" :alt="navUrl" />
	</NuxtLink>
</template>

<style lang="scss">
	a {
		padding: 10px;

		border-radius: 10px;

		opacity: .7;
		transition: .3s;

		&:hover {
			opacity: 1;
		}
	}

	.router-link-active {
		opacity: 1;
	}
</style>
