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
		:class="`sidebar-container ${showContent}`"
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

		transition: .5s ease-out;
		opacity: .6;

		&:hover {
			box-shadow: 0 4px 4px 1px rgba(248, 84, 84, 0.15);
			opacity: 1;
		}
	}

	.true {
		box-shadow: 0 4px 4px 1px rgba(248, 84, 84, 0.25);
		outline: 1px solid #F85454;
		opacity: 1;
	}
</style>
