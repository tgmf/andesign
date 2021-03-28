import axios from "axios"
let dynamicRoutes = () => {
  // const routes = axios
  //   .get("https://css-tricks.com/wp-json/wp/v2/posts?page=1&per_page=20")
  //   .then(res => {
  //     return res.data.map(post => `/blog/${post.slug}`)
  //   })
  const routes = axios
    .get("http://andesign.cpkiu.xyz/wp-json/wp/v2/case?page=1&per_page=100")
    .then(res => {
      return res.data.map(pCase => `/${pCase.slug}`)
    })
  console.log(routes)
  return routes
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/mixins.scss",
    "~/assets/fonts/fonts.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/posts.server.js",
    "~/plugins/tags.server.js",
    "~/plugins/dateformat.js"
  ],
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) { }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      dark: false,
      light: true,
      themes: {
        dark: {
          background: '#00a86b'
        },
        light: {
          background: '#F6FBFB',
          andeOrange: '#E8AF64',
          andeDarkOrange: '#D97535',
          andeGray: '#5F6A75',
          andeLightGray: '#DCE3EB',
          andeTeal: '#00AAB4',
        }
      }
    }
  },
}