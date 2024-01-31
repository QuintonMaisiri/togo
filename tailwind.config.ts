import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green': '#399F6E',
        'yellow': '#FFCD48',
        'teal': '#0D2F3F',
        'black': '#141718',
        'dark-gray': '#343839',
        'gray': '#D9D9D9',
        'light-gray': '#F5FFFA',
      },
      fontFamily:{
        style: "Reey",
        primary: "Questrial"
      },
      boxShadow: {
        'circle': 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
      }
    },
  },
  plugins: [],
}
export default config
