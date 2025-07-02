module.exports = {
  // ...existing config...
  theme: {
    extend: {
      // ...existing theme extensions...
      textShadow: {
        'default': '0 2px 4px rgba(0,0,0,0.1)',
        'sm': '0 1px 2px rgba(0,0,0,0.2)',
      },
      transitionProperty: {
        'height': 'height',
        'translate-z': 'translateZ',
      },
    },
  },
  plugins: [
    // ...existing plugins...
    // Add plugin for text shadow if not already present
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0,0,0,0.2)',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
