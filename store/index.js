const siteURL = "http://andesign.cpkiu.xyz/"

export const state = () => ({
  categories: [],
  pCases: [],
  posts: [],
  tags: [],
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateTags: (state, tags) => {
    state.tags = tags
  },
  updatePCases: (state, pCases) => {
    state.pCases = pCases
  },
  updateCategories: (state, categories) => {
    state.categories = categories
  }
}

export const actions = {
  async getPosts ({ state, commit, dispatch }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        `${siteURL}/wp-json/wp/v2/posts?page=1&per_page=100&_embed=1`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, tags, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          tags,
          content
        }))

      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
  async getPCases ({ state, commit, dispatch }) {
    if (state.pCases.length) return

    try {
      let pCases = await fetch(
        `${siteURL}/wp-json/wp/v2/case?page=1&per_page=100&_embed=1`
      ).then(res => res.json())

      pCases = pCases
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, date, tags, content, categories, description, photo_gallery }) => ({
          id,
          slug,
          title,
          date,
          tags,
          content,
          categories,
          description,
          photo_gallery
        }))

      commit("updatePCases", pCases)
    } catch (err) {
      console.log(err)
    }
  },
  async getTags ({ state, commit }) {
    if (state.tags.length) return

    let allTags = state.posts.reduce((acc, item) => {
      return acc.concat(item.tags)
    }, [])
    allTags = allTags.join()

    try {
      let tags = await fetch(
        `${siteURL}/wp-json/wp/v2/tags?page=1&per_page=100&include=${allTags}`
      ).then(res => res.json())

      tags = tags.map(({ id, name }) => ({
        id,
        name
      }))

      commit("updateTags", tags)
    } catch (err) {
      console.log(err)
    }
  },
  async getCategories ({ state, commit, dispatch }) {
    if (state.categories.length) return

    try {
      let categories = await fetch(
        `${siteURL}/wp-json/wp/v2/categories?page=1&per_page=100&hide_empty=true`
      ).then(res => res.json())

      categories = categories
        .map(({ id, slug, name, description, date, parent, cat_icon, theme }) => ({
          id,
          slug,
          name,
          description,
          date,
          parent,
          cat_icon,
          theme
        }))

      commit("updateCategories", categories)
    } catch (err) {
      console.log(err)
    }
  }
}
