// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/assets/css/basic.css','/assets/css/reset.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },// ページ遷移でアニメーション（cssにも記載）
    head: {
      title: 'Nuxt 3 basic',
      meta: [{ name: 'description', content: 'Nuxt 3 for beginners' }],
      link: [{ rel: 'icon', href: '/ICON.svg' }],
    },
  },
})
