/**
  This file can be accessed using: {{ site.title }}
*/

const year = new Date().getFullYear();

module.exports = {
  annee: `${year}`,
  allowDarkMode: true,
  lang: 'en', // for html tag
  title: 'MF Blog Starter',
  description: 'Eleventy + Tailwind CSS blog starter',
  url: 'https://mf-blogstarter.netlify.app', // Don't end with a slash /
  brandName: 'MF', // for copyright and legal page

  author: {
    name: 'Luke Bennett', // For posts meta and Open Graph meta (FB and Twitter)
    email: 'hello@lukebennett.com.au',
    github: 'https://github.com/lukebennett88',
    twitter: 'https://twitter.com/luke_bennett_',
  },

  meta_data: {
    theme_color: '#ffffff', // used in Chrome, Firefox OS and Opera
    default_social_image: '/assets/img/featured_image.png', // For Open Graph meta
    locale: 'en_AU', // For Open Graph meta
    twitter_username: '@luke_bennett_', // For Twitter Open Graph meta
  },
};
