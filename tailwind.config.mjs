/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#091009',
        'cyber-green': '#00ff55',
        'cyber-blue': '#aaa'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
