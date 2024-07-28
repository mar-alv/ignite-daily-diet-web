/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
		colors: {
			white: '#fff',

			'red-dark': '#bf3b44',
			'red-mid': '#f3babd',
			'red-light': '#f4e6e7',

			'green-dark': '#639339',
			'green-mid': '#cbe4b4',
			'green-light': '#e5f0db',
		},
    extend: {
      colors: {
        'gray-100': '#1b1d1e',
        'gray-200': '#333638',
        'gray-300': '#5c6265',
        'gray-400': '#b9bbbc',
        'gray-500': '#dddedf',
        'gray-600': '#eff0f0',
        'gray-700': '#fafafa',
      },
    },
    fontFamily: {
      nunito: 'Nunito Sans, sans-serif',
    },
  },
  plugins: [],
}
