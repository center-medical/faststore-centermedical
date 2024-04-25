
module.exports = {
  seo: {
  "title": "Equipamentos hospitalares, equipamento cirúrgicos e mais | CenterMedical",
  "description": "CenterMedical, Equipamentos Hospitalares. Compre em até 6X sem Juros. Com Frete Grátis*. 12 anos de Experiência. Acesse e Conheça! Desc para pgto no Boleto. Pague em até 6x s/ juros. As Melhores Marcas. Tipos: Móveis, Autoclaves, Bombas Aspiradoras.",
  "titleTemplate": "%s | CenterMedical",
  "author": "CenterMedical"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "centermedical",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://centermedical.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/resgate%20e%20salvamento",
    search: "/s?q=CenterMedical",
    pdp: "/colar-cervical-varios-tamanhos/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/colar-cervical-varios-tamanhos/p",
      collection: "/resgate%20e%20salvamento",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/colar-cervical-varios-tamanhos/p",
      collection: "/resgate%20e%20salvamento",
      collection_filtered: "/resgate%20e%20salvamento/?category-1=resgate%20e%20salvamento&brand=CenterMedical&facets=category-1%2Cbrand%27",
      search: "/s?q=CenterMedical",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://centermedical.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
