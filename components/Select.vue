<template>
	<select
		v-model="selectedEntry"
		@change="onSelect"
		:class="{'active': selectedEntry !== 'Show all ' + props.filterBy}"
	>
		<option selected :value="'Show all ' + filterBy">
			Show all {{filterBy}}
		</option>
		<option
			v-for="entry in selectFrom"
			:key="entry.id"
			:value="entry"
		>
			{{ entry.title.toUpperCase() }}
		</option>
	</select>
</template>

<script setup lang="ts">
const emit = defineEmits(['select']);

const props = defineProps({
	selectFrom: {
		type: Object
	},
	filterBy: String
})

const selectedEntry = ref("Show all " + props.filterBy)

const onSelect = () => {
	emit('select', {
		selected: selectedEntry.value.title
	})
}
</script>

<style scoped>
	div {
		display: flex;
	}

	select {
		border-radius: 28px;
		background: rgba(41, 41, 41);
		opacity: .8;
		font-size: 16px;
		padding: 8px 15px;
		color: rgba(255, 255, 255, 0.8);
		font-weight: 800;
		height: -webkit-fill-available;

		transition: .3s;

		&:hover {
			opacity: .9;
		}
	}

	option {
		font-weight: 800;
	}

	.active {
		transition: .3s;
		opacity: 1;
	}
</style>
