// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    preset: 'static',
  },
  routeRules: {
    '/**': { prerender: true },
  },

  app: {
    head: {
      title: 'Agile Agent — AI-Powered Code Review for GitLab, Jira & Confluence',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ship faster with AI that reads your GitLab repos, Jira tickets, and Confluence docs. Self-hosted, single binary, no cloud dependency.' },
        { property: 'og:title', content: 'Agile Agent — AI Code Review Agent' },
        { property: 'og:description', content: 'Ship faster with AI that reads your GitLab repos, Jira tickets, and Confluence docs.' },
        { property: 'og:image', content: '/hero-screenshot.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' },
      ],
    },
  },
})
