/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: {
          sans: ['Noto Sans', 'sans-serif'],
          arabic: ['Noto Sans Arabic', 'sans-serif'],
        },
        ibm: {
          sans: ['IBM Plex Sans', 'sans-serif'],
          arabic: ['IBM Plex Sans Arabic', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
}

