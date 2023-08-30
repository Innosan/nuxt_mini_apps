<template>
	<div>
		<Select
			:select-from=selectOptionsSchool
			filter-by="schools"
			@select="onSelectSchool"
		/>

		<Select
			:select-from=selectOptionsGenders
			filter-by="genders"
			@select="onSelectGender"
		/>
	</div>
</template>

<script setup>
const emit = defineEmits(['filter']);

const selectOptionsSchool = [
	{
		id: 1,
		title: "Gryffindor"
	},
	{
		id: 2,
		title: "Slytherin"
	},
	{
		id: 3,
		title: "Hufflepuff"
	},
	{
		id: 4,
		title: "Ravenclaw"
	},
]

const selectOptionsGenders = [
	{
		id: 1,
		title: "female"
	},
	{
		id: 2,
		title: "male"
	}
]

const selectedFilters = ref({
	house: "",
	gender: ""
})

const onSelectSchool = ({selected}) => {
	selectedFilters.value.house = selected

	emit('filter', {
		allFilters: selectedFilters.value
	})
}

const onSelectGender = ({selected}) => {
	selectedFilters.value.gender = selected

	emit('filter', {
		allFilters: selectedFilters.value
	})
}
</script>

<style scoped>
	div {
		display: flex;
		gap: 18px;
	}
</style>
