// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['/assets/css/reset.css','/assets/css/basic.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },// ページ遷移でアニメーション（cssにも記載）
    head: {
      title: 'Nuxt3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link: [{ rel: 'icon', href: '/ICON.svg' }],
    },
  },

  modules: [
    ['@nuxtjs/google-fonts', {
        families: {
          Montserrat: true,
        }
    }],
  ],
})