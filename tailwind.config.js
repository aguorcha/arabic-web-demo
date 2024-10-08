/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['"Noto Sans"', 'sans-serif'],
        'noto-sans-arabic': ['"Noto Sans Arabic"', 'sans-serif'],
        'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
        'ibm-plex-sans-arabic': ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

