module.exports = {
  node: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    borderColor: ['active'],
    borderOpacity: ['active'],
    borderRadius: ['active'],
    borderStyle: ['active'],
    borderWidth: ['active'],

  },
  plugins: [],
}
