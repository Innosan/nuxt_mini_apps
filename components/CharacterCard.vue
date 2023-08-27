<script setup>
defineProps({
	character: Object
})
</script>

<template>
	<div class="card-container" :style="`background-image: url(${character.image})`">
		<div class="card-sidebar">
			<CharacterSidebarItem/>
		</div>
		<div class="card-content">
			<p class="character-name">{{character.name}}</p>
			<div>
				<p class="actor-name">{{character.actor}}</p>
				<p class="date-of-birth">{{character.dateOfBirth}}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
