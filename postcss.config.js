const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: ['./dist/**/*.html'],
  whitelist: ['dark-mode'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:%.]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgecss, cssnano] : []),
  ],
};
