export const useGeolocation = () => {
	const coordinates = ref({latitude: 0, longitude: 0})

	let watcher = null
	onMounted( () => {
		watcher = navigator.geolocation.watchPosition(
			(position) => {
				coordinates.value = position.coords
			},
			positionError => (console.log(positionError.message))
		)
	})

	onUnmounted(() => {
		if (watcher) navigator.geolocation.clearWatch(watcher)
	})

	return coordinates
}
