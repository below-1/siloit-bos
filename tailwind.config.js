/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f1f7fe',
          '100': '#e2effc',
          '200': '#bedef9',
          '300': '#84c2f5',
          '400': '#43a4ed',
          '500': '#1a88dd',
          '600': '#0d6bbc',
          '700': '#0c5598',
          '800': '#0e497e',
          '900': '#123f68',
          '950': '#0e2f53',
        },
        'secondary': {
          '50': '#fefae8',
          '100': '#fff5c2',
          '200': '#ffe789',
          '300': '#ffcd2f',
          '400': '#fdbb12',
          '500': '#eca106',
          '600': '#cc7b02',
          '700': '#a35505',
          '800': '#86430d',
          '900': '#723711',
          '950': '#431b05',
        },
      }
    },
  },
  plugins: [],
}

