<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const coords = useGeolocation()

const weatherState = ref('')

watch(coords, async () => {
	weatherState.value = await useFetch(runtimeConfig.public.weatherApiBase, {
		query: {
			lat: coords.value.latitude,
			lon: coords.value.longitude,
			units: 'metric',
			appid: runtimeConfig.public.weatherApiKey
		}
	})
})
</script>

<template>
	<div class="page-container">
		<h1>Weather</h1>

		{{coords}}

		{{weatherState}}
	</div>
</template>
