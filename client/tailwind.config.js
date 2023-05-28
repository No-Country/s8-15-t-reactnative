/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				violeta: '#6D39E5',
				azul: '#5C91F7',
				naranja: '#F18805',
			},
		},
		plugins: [],
	},
}
