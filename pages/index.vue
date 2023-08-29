<script setup lang="ts">
const {data: characters} = await useFetch('https://innosan.pythonanywhere.com/harry-potter')

const itemsPerPage = 20
const pageStartState = ref(0)
const pageEndState = ref(20)

const search = ref("")

const performSearch = (searchQuery: string) => {
	search.value = searchQuery
};

const onPageChange = ({ pageStart, pageEnd }) => {
	pageStartState.value = pageStart
	pageEndState.value = pageEnd
}

</script>

<template>
	<div class="page-container">
		<h1>Harry Potter</h1>

		<SearchBar
			@search="performSearch"
		/>

		<template v-if="search">
			<div class="characters-container">
				<CharacterCard
					v-for="character in characters.filter(
						({ name }) => name.toLowerCase().includes(search.toLowerCase())
					)"
					:key="character.id"
					:character=character
				/>
			</div>
		</template>
		<template v-else>
			<div class="characters-container">
				<CharacterCard
					v-for="character in characters.slice(pageStartState, pageEndState)"
					:key="character.id"
					:character=character
				/>
			</div>

			<LazyPaginationBar
				:total-items="characters.length"
				:items-per-page="itemsPerPage"
				@page="onPageChange"
			/>
		</template>
	</div>
</template>

<style scoped>
	.characters-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 30px;
	}
</style>
