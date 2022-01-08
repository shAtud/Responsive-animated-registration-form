module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
        keyframes: {
            'fade-left-right': {
                '0%': {
                    opacity: '0',
                    transform: 'translateX(-30px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateX(0px)',

                },
            },
            'fade-in-down': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(150px)'
              },
              '25%': {
                  opacity: '1',
                  transform: 'translateY(75px)'
              },
              '50%': {
                opacity: '1',
                transform: 'translateY(25px)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
          },
        },
        animation: {
            'fade-left-right': 'fade-left-right 2s ease-out',
            'fade-in-down': 'fade-in-down 1s ease-out',
        }
    },
},
variants: {},
plugins: [],
}
