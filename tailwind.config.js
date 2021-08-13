module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        erro: {
          '75% , 100%': {
            transform: 'translateY(-5px)',
          }
        },
      },
      animation: {
        erro: 'erro 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
