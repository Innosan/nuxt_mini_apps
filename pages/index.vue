<script setup lang="ts">
const { data: characters } = await useFetch(
	"https://innosan.pythonanywhere.com/harry-potter"
);

const itemsPerPage = 20;
const pageStartState = ref(0);
const pageEndState = ref(itemsPerPage);

const search = ref("");

const selectedFilters = ref({
	house: "",
	gender: "",
});

const performSearch = (searchQuery: string) => {
	search.value = searchQuery;
};

const onPageChange = ({ pageStart, pageEnd }) => {
	pageStartState.value = pageStart;
	pageEndState.value = pageEnd;
};

const onFilterChange = ({ allFilters }) => {
	selectedFilters.value = { ...allFilters };
};
</script>

<template>
	<div class="page-container">
		<h1>Harry Potter</h1>

		<div class="sub-header">
			<SearchBar @search="performSearch" />

			<FilteringBar @filter="onFilterChange" />
		</div>

		<template v-if="selectedFilters">
			<div class="characters-container">
				<CharacterCard
					v-for="character in characters.filter(
						({ house, gender }) =>
							house === selectedFilters.house &&
							gender === selectedFilters.gender
					)"
					:key="character.id"
					:character="character"
				/>
			</div>
		</template>

		<template v-if="search">
			<div class="characters-container">
				<CharacterCard
					v-for="character in characters.filter(({ name }) =>
						name.toLowerCase().includes(search.toLowerCase())
					)"
					:key="character.id"
					:character="character"
				/>
			</div>
		</template>
		<template v-else>
			<div class="characters-container">
				<CharacterCard
					v-for="character in characters.slice(
						pageStartState,
						pageEndState
					)"
					:key="character.id"
					:character="character"
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

.sub-header {
	display: flex;
	gap: 60px;
}
</style>
