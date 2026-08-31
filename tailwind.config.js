/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: '#00A3E0',
          'cyan-dark': '#0088CC',
          'cyan-light': '#E6F5FC',
          'cyan-tint': '#F0F8FD',
          orange: '#FF8A00',
          'orange-bright': '#FF5500',
          'orange-light': '#FFF4E6',
          slate: '#1E2A38',
          'slate-dark': '#111827',
          sand: '#FAF8F5',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 30px -10px rgba(0, 163, 224, 0.15)',
        'brand-lg': '0 20px 40px -15px rgba(0, 163, 224, 0.22)',
        'orange-glow': '0 10px 25px -5px rgba(255, 138, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
