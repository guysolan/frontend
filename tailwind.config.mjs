/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontSize: {
				sm: "1rem",
				md: "1.25rem",
				lg: "1.5rem",
				xl: "2rem",
				"2xl": "2.5rem",
				"3xl": "3rem",
				"4xl": "4rem",
				"5xl": "5.25rem",
			},
		},
	},
	plugins: [],
};
