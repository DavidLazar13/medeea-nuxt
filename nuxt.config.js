
const config = require('./.contentful.json');

let ROOT_PATH = 'https://medeea.herokuapp.com/'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  data() {
    return {
      logo: ROOT_PATH + require('./assets/thumbnail.png')
    }
  },
  head: {
    title: 'MEDEEA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Official Website' },
      { property: 'og:site_name', content: 'MEDEEA' },
      { property: 'og:title', content: 'MEDEEA' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: 'Official Website' },
      { property: 'og-image', content: this.logo }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_ENVIRONMENT: config.CTF_ENVIRONMENT
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful',
    '~/plugins/vueMarkdown.js',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-168910459-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/dotenv',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          sm: 767,
          md: 768,
          lg: Infinity
        }
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  server: {
    port: process.env.PORT || 3000,
    host: "0.0.0.0"
  }
}
