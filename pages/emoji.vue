<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const {data: emojis} = await useFetch(runtimeConfig.public.myApiBase + "/emojis")

const search = ref("");

const performSearch = (searchQuery: string) => {
	search.value = searchQuery;
};
</script>

<template>
	<div class="page-container">
		<h1>Emoji Finder</h1>

		<SearchBar
			placeholder="Type in emoji title..."
			@search="performSearch"
		/>
		<div class="emojis">
			<EmojiCard
				v-for="emoji in emojis.filter(({ description }) =>
					description.includes(search.toLowerCase())
				)"
				:emoji="emoji"
			/>
		</div>
	</div>
</template>

<style>
	.emojis {
		display: flex;
		gap: 32px;

		flex-wrap: wrap;
	}
</style>
