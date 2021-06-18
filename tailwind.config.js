module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    borderColor: ['active'],
    borderOpacity: ['active'],
    borderRadius: ['active'],
    borderStyle: ['active'],
    borderWidth: ['active'],
    animation: ['hover', 'focus'],
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
