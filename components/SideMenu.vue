<template>
	<nav>
		<NavItem
			nav-url="/"
			iconUrl="ic_harry_nav.svg"
			background-color="#F85454"
		/>
		<NavItem
			nav-url="/emoji"
			iconUrl="ic_emoji_nav.svg"
			background-color="#FAB735"
		/>
		<NavItem
			nav-url="/weather"
			iconUrl="ic_weather_nav.svg"
			background-color="#3584FA"
		/>
	</nav>
</template>

<style scoped lang="scss">
nav {
	display: flex;
	flex-direction: column;
	align-self: flex-start;
	gap: 40px;

	background-color: #292929;

	height: 80vh;
	padding: 24px;
	margin-left: 40px;

	border-radius: 18px;

	transition: 0.3s;

	position: sticky;
	top: 40px;

	&:hover {
		box-shadow: 18px 0 47px 12px rgba(0, 0, 0, 0.3);
	}
}
</style>
