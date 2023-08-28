// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	// @ts-ignore
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
});
