/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0a',
        'cyber-green': '#00ff00',
        'cyber-blue': '#00ffff'
      }
    },
  },
  plugins: [],
}