/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {      
			fontFamily: {
			sans: ["Creepster", ...defaultTheme.fontFamily.sans],
		  },
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "luxury"],
	}
}
