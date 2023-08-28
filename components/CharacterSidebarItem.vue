<script setup lang="ts">
defineProps({
	itemIcon: String,
	itemContent: String
})

const showContent = ref(false)
</script>

<template>
	<div
		@click="showContent = !showContent"
		class="sidebar-container"
	>
		<img :src="`/_nuxt/assets/icons/harry/${itemIcon}`" :alt="itemContent + ' icon'">
		<transition name="fade">
			<p v-if="showContent">{{itemContent}}</p>
		</transition>
	</div>
</template>

<style scoped>
	.sidebar-container {
		display: flex;
		align-items: center;
		gap: 12px;

		width: fit-content;

		border-radius: 7px;
		background: rgba(30, 30, 30, 0.83);
		backdrop-filter: blur(2px);

		padding: 8px;

		cursor: pointer;
	}
</style>
