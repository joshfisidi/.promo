const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media', // or 'class'
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'custom-blue': '#3490dc',
        'custom-red': '#e3342f',
      },
      spacing: {
        '7': '1.75rem',
        '9': '2.25rem',
        '28': '7rem',
        '80': '20rem',
        '96': '24rem',
      },
      height: {
        '1/2': '50%',
      },
      scale: {
        '30': '.3',
      },
      boxShadow: {
        outline: '0 0 0 3px rgba(101, 31, 255, 0.4)',
      },
      // Define your custom breakpoints here
      screens: {
        'xs': '460px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2040px',
        // Add other custom breakpoints if needed
      },
    },
  },
  variants: {
    extend: {
      scale: ['responsive', 'hover', 'focus', 'group-hover'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins you want to use
    // Example: require('@tailwindcss/typography'),
  ],
};
