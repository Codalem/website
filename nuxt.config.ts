// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/image", "@nuxt/fonts", "nuxt-gtag"],
  typescript: {
    typeCheck: true
  },
  app: {
    head: {
      title: 'Codalem',
      meta: [
        {
          name: 'description',
          content: 'Codalem, notre bac à sable pour concevoir et lancer des projets divers et variés.'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://codalem.com'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'fr'
      },
    }
  },
  vue: {
  },
  routeRules: {
    '/configurator': { redirect: { to: '/projects', statusCode: 301 } }
  },
  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  gtag: {
    id: 'G-ZZ45111LQR'
  }
})