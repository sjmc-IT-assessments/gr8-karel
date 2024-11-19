/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0) scale(1)' },
        '50%': { transform: 'translateY(-40px) scale(1.2)' }, // Bigger range
      }
    },
    animation: {
      'float': 'float 4s infinite', // Faster
    },
    plugins: [],
  }
}