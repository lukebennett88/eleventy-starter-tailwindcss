const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindUi = require('@tailwindcss/ui');
const tailwindDarkMode = require('tailwindcss-dark-mode');

module.exports = {
  theme: {
    // Replaces default settings or add new settings
    container: {
      center: true,
    },
    darkSelector: '.dark-mode',
    // Extends default settings
    extend: {
      fontFamily: {
        // Use Tailwind default serif fonts with font-display
        display: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodybg: 'var(--color-bodybg)',
        muted: 'var(--color-muted)',
        bodytext: 'var(--color-bodytext)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        links: 'var(--color-links)',
        focus: 'var(--color-focus)',
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    borderColor: ['hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
    textColor: ['hover', 'focus', 'dark', 'dark-hover', 'dark-focus'],
  },
  plugins: [
    tailwindUi, // https://tailwindui.com/components
    tailwindDarkMode(), // https://github.com/ChanceArthur/tailwindcss-dark-mode
  ],
};
