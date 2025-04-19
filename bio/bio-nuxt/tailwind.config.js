/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1E293B',
          200: '#0F172A',
          300: '#0B1120'
        },
        light: {
          100: '#F8FAFC',
          200: '#F1F5F9',
          300: '#E2E8F0'
        }
      }
    }
  },
  plugins: []
}