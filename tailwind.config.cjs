/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			accent: '#FFFFFF',
			grey: '#f7f7f7',
			black: '#252422',
			chip: '#ff715b'
		},
		fontFamily: {
			sans: ['Work Sans', 'sans-serif'],
			mont: ['Montserrat', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
