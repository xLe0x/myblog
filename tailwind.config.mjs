/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#111',
        'cyber-green': '#00ff00',
        'cyber-blue': '#ee8'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
