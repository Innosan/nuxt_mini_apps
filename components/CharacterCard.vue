<script setup>
defineProps({
	character: Object
})
</script>

<template>
	<div
		class="card-container"
		:style="`background-image: url(${character.image})`"
	>
		<div class="card-sidebar">
			<CharacterSidebarItem
				item-icon="ic_house.svg"
				:item-content="character.house"
			/>
			<CharacterSidebarItem
				item-icon="ic_sex.svg"
				:item-content="character.gender"
			/>
		</div>
		<div class="card-content">
			<p class="character-name">{{character.name}}</p>
			<div class="card-subcontent">
				<p class="actor-name">{{character.actor}}</p>
				<p class="date-of-birth">{{character.dateOfBirth}}</p>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
	.card-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		width: 265px;
		height: 420px;

		background-size: cover;
		background-color: #414141;
		background-position: center;

		border-radius: 18px;

		color: white;

		transition: .15s ease-out;

		&:hover {
			scale: 1.02;
		}
	}

	.card-sidebar {
		display: flex;
		flex-direction: column;
		gap: 18px;

		padding: 24px;
	}

	.card-content {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 24px;

		border-radius: 18px;
		background: rgba(30, 30, 30, 0.88);
		backdrop-filter: blur(2px);
	}

	.card-subcontent {
		display: flex;
		justify-content: space-between;

		opacity: .8;
	}

	.character-name {
		font-size: 24px;
		font-weight: 800;
	}

	.actor-name {
		font-size: 18px;
		font-weight: 600;
		text-decoration-line: underline;
	}
</style>
