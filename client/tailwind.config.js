/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				lila: '#BE7EDC',
				violeta: '#6D39E5',
				violeta_background: '#f2effa',
				celeste: '#91DBF2',
				azul: '#5C91F7',
				azul_oscuro: '#005ABD',
				naranja: '#F18805',
				naranja_claro: '#F0B064',
				gris_background: '#F4F4F9',
				gris_oscuro: '#49454F',
				gris_medio: '#9B9B9B',
				rojo: '#D74479',
				verde_claro: '#70CD6E',
				verde: '#39A056',
			},
		},
		plugins: [],
	},
};
