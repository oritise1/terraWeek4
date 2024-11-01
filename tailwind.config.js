/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'Barlow', 'sans-serif'],
        Heebo: ['"Heebo"', 'serif'],
        Barlow: ['"Barlow"', 'serif']
      },
      keyframes: {
        underline: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        underline: 'underline 0.3s ease-out forwards',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animated-underline': {
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: '10px',
            width: '100%',
            height: '2px',
            backgroundColor: 'rgb(237, 44, 73)',
            transform: 'translateX(-50%) scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform 0.3s ease-out',
          },
          '&:hover::after': {
            transform: 'translateX(-50%) scaleX(1)',
          },
        },
      });
    },
  ],
}

