/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk']
      },
      colors: {
        whiteColor: 'hsl(0, 0%, 100%)',
        darkViolet: 'hsl(278, 68%, 11%)',
        lightGrayishViolet: 'hsl(279, 6%, 55%)',
        darkGrayViolet: 'hsl(270, 3%, 87%)',
        redError: 'hsl(0, 100%, 66%)',
        inputBorderFrom: 'hsl(249, 99%, 64%)',
        inputBorderTo: 'hsl(278, 94%, 30%)',
      }
    },
  },
  plugins: [],
}
