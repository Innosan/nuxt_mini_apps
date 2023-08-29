<script>
import "~/assets/css/page_transition.css";
import "~/assets/css/app.css";
import "~/assets/css/font.css";
import "~/assets/css/animations.css";
import "~/assets/css/global.css";
</script>

<template>
	<div>
		<SideMenu />
		<NuxtPage />
	</div>
</template>

<style scoped>
div {
	display: flex;
	gap: 60px;

	width: 95vw;
	height: 100%;

	margin: 0 auto;
}
</style>
