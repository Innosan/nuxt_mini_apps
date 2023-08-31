<template>
	<div class="emoji-card">
		<div class="title-container">
			<p class="emoji">{{emoji.emoji}}</p>
			<p class="emoji-title">{{ emoji.description }}</p>
		</div>
		<div class="emoji-tags">
			<p
				class="tag"
				v-for="tag in emoji.tags"
			>
				#{{ tag }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	emoji: Object
})
</script>

<style scoped>
	.emoji-card {
		border-radius: 16px;
		background: #292929;

		padding: 16px;

		width: fit-content;

		color: white;

		display: flex;
		flex-direction: column;
		gap: 36px;
	}

	.title-container {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.emoji {
		font-size: 44px;
	}

	.emoji-title, .tag {
		font-size: 20px;
		font-weight: 800;
	}

	.emoji-tags {
		display: flex;
		gap: 16px;
	}

	.tag {
		background-color: #6F6F6F;
		opacity: .6;
		font-size: 16px;
		width: max-content;

		padding: 3px 12px;
		border-radius: 17px;
	}
</style>
