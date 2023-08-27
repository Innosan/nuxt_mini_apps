<script setup lang="ts">
const {data: characters} = await useFetch('http://innosan.pythonanywhere.com/harry-potter')
</script>

<template>
	<div class="page-container">
		<h1>Harry Potter</h1>

		<div>
			<CharacterCard
				v-for="character in characters"
				:key="character.id"
				:character=character
			/>
		</div>
	</div>
</template>

<style scoped>
	.page-container {
		display: flex;
		flex-direction: column;
	}
</style>
