<script setup lang="ts">
const {data: characters} = await useFetch('http://innosan.pythonanywhere.com/harry-potter')
</script>

<template>
	<div class="page-container">
		<h1>Harry Potter</h1>

		<div class="characters-container">
			<CharacterCard
				v-for="character in characters"
				:key="character.id"
				:character=character
			/>
		</div>
	</div>
</template>

<style scoped>
	.characters-container {
		display: flex;
		flex-wrap: wrap;
		gap: 60px;
	}
</style>
