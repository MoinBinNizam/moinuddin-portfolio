/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: '#3b82f6',
        secondary: '#1f2937',
      },
      borderRadius: {
        none: '0',
      },
    },
  },
  plugins: [],
}
