import colors from 'vuetify/es5/util/colors';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  ssr: true,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: './favicon.png' },
    ],
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
    '~/plugins/currency.ts',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    [
      'nuxt-i18n',
      {
        locales: [
          { code: 'en', file: 'en.json', name: 'English', shortName: 'Eng', rtl: false },
          { code: 'ru', file: 'ru.json', name: 'Русский', shortName: 'Рус', rtl: false },
          { code: 'ar', file: 'ar.json', name: 'العربية', shortName: 'عربي', rtl: true },
        ],
        lazy: true,
        langDir: 'locales/',
        defaultLocale: 'ru',
        fallbackLocale: 'en',
        strategy: 'no_prefix',
      },
    ],
  ],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${process.env.API_BASE}/graphql`,
      },
    },
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#00AC00',
          accent: '#1C6739',
          secondary: '#FFFFFF',
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
    icons: {
      iconfont: 'mdi',
      values: {
        dropdown: 'mdi-chevron-down',
      },
    },
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (!ctx.isDev) {
        config.output!.publicPath = './_nuxt/'; // default is the absolute '/_nuxt/'.
      }
      config.module!.rules.push({
        test: /\.pdf$/,
        loader: 'file-loader',
      });
    },
  },
  router: {
    base: process.env.BASE_URL || '/',
  },
};

export default config;
