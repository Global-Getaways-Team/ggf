/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			accent: '#FFFFFF',
			silver: '#ecebff'
		},
		fontFamily: {
			sans: ['Work Sans', 'sans-serif'],
			mont: ['Montserrat', 'sans-serif']
		},
		extend: {}
	},
	plugins: []
};
