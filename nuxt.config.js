export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ricardo Gouveia - Front-end developer & UI designer',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { name: 'viewport', content: 'width:device-width, initial-scale:1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Site de um desenvolvedor e designer que abre o Sketch só pra se distrair',
      },
      { charset: 'utf-8' },
      {
        itemprop: 'name',
        content: 'Ricardo Gouveia - Front end developer &amp; UI designer',
      },
      {
        name: 'description',
        itemprop: 'description',
        content:
          'Site de um desenvolvedor e designer que abre o Sketch só pra se distrair',
      },
      { name: 'format-detection', content: 'telephone:no' },
      { name: 'theme-color', content: '#4ecdc4' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@ricardogouveia3' },
      { name: 'twitter:domain', content: 'ricardogouveia3.github.io' },
      {
        name: 'twitter:title',
        content: 'Ricardo Gouveia - Front end jr. developer &amp; UI designer',
      },
      {
        name: 'twitter:description',
        content:
          'Site de um desenvolvedor front end jr. e UI designer que abre o Sketch só pra se distrair.',
      },
      {
        property: 'og:image',
        itemprop: 'image',
        content: './opengraph.jpg',
      },
      {
        property: 'og:title',
        content: 'Ricardo Gouveia - Front end jr. developer &amp; UI designer',
      },
      { property: 'og:url', content: 'https://rcrd.me/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'rcrd.me' },
      {
        property: 'og:description',
        content:
          'Site de um desenvolvedor front end jr. e UI designer que abre o Sketch só pra se distrair.',
      },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      { rel: 'shortcut icon', href: './favicon.ico' },
      { rel: 'logo', type: 'image/svg', href: './logo.svg' },
      {
        name: 'google-site-verification',
        content: 'bu8jWg3PkRWa2GeQxmi3S089gNfySWQd16gy5Rde8M8',
      },
      { rel: 'canonical', href: 'https://rcrd.me' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Playfair+Display:400,700',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
    '~assets/scss/variables.scss',
    '~assets/scss/animations.scss',
  ],

  // Configure global SCSS variables as here: https://dev.to/paramo/using-sass-global-variables-in-nuxt-js-j0k
  styleResources: {
    scss: ['./assets/scss/*.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
