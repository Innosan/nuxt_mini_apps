// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	// @ts-ignore
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	runtimeConfig: {
		// Keys within public, will be also exposed to the client-side
		public: {
			myApiBase: 'https://innosan.pythonanywhere.com/',
			weatherApiBase: 'https://api.openweathermap.org/data/2.5/weather',
			unsplashApiBase: 'https://api.unsplash.com/search/photos/',

			weatherApiKey: 'ece19822df9d679525a51b5d1f8d566a',
			unsplashApiKey: 'gcK-21RopHVCGDUNDowX9e41Uy32hvBwV_YjnUPczAw',
		}
	}
});
