export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',

  // Head: https://go.nuxtjs.dev/config-head

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bag',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Buy anything Ghana is an ecommerce platform that boast of same day delivery with diverse products of all kinds.',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/global.css',
    '~/assets/css/display.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/elementUI/element-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  oneSignal: {
    init: {
      appId: 'c38bbf7a-63be-49b0-9764-811f391fc294',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true,
      },
    },
    cdn: true,
    OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js',
  },
  pwa: {
    icon: {
      sizes: [96, 128, 192, 256, 384, 500, 1024],
    },
    manifest: {
      name: 'BuyAnything Ghana',
      short_name: 'BAG',
      lang: 'en',
      description: 'Find Ghanaian products locally with same day delivery.',
    },
    meta: {
      appleStatusBarStyle: 'black-translucent',
      theme_color: '#cc2228',
      name: 'BuyAnything Ghana',
      author: 'Charles Kwabena Obeng',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
}
