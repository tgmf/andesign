<template>
  <main>
    <section class="page-background">
      <v-container
        fluid
      >
        <v-row>
          <v-col
            cols=12
            md=10
            offset-md=1
            >
          </v-col>
        </v-row>
      </v-container>
    </section>
    <app-masthead ></app-masthead>
    <portfolio :categories="categories"></portfolio>
    <!-- <pages :pages="pages"></pages> -->
  </main>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue"
import Portfolio from "@/components/Portfolio.vue"
export default {
  components: {
    AppMasthead,
    Portfolio
  },
  data() {
    return {
      activeClass: "active"
    };
  },
  computed: {
    // posts() {
    //   return this.$store.state.posts
    // },
    pCases() {
      return this.$store.state.pCases
    },
    // tags() {
    //   return this.$store.state.tags
    // },
    categories() {
      return this.$store.state.categories
    }
    // sortedPosts() {
    //   if (!this.selectedTag) return this.posts
    //   return this.posts.filter(el => el.tags.includes(this.selectedTag))
    // },
    // sortedPCases() {
    //   if (!this.selectedTag) return this.pCases
    //   return this.pCases.filter(el => el.tags.includes(this.selectedTag))
    // },
    // pages() {
    //   return this.$store.state.pages
    // }
  },
  created() {
    // this.$store.dispatch("getPosts"),
    this.$store.dispatch("getPCases")
    // this.$store.dispatch("getCategories"),
    // this.$store.dispatch("getPages")
  },
  methods: {
    // updateTag(tag) {
    //   if (!this.selectedTag) {
    //     this.selectedTag = tag.id
    //   } else {
    //     this.selectedTag = null
    //   }
    // }
  }
};
</script>

<style lang="scss">

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: #151D24;
}

.page-background {
  position: fixed;
  width: 100%;
  height: calc(100vh - 96px);
  display: flex;
  align-items: center;

  .container {
    padding: .75em 4em;
  
    .col-12{
      height: calc(80vh - 77px);
      background: 
        url("/img/Andy_web.png") no-repeat right center scroll; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      background-size: contain;
    }
  }
  
}

.tags-title {
  background-color: #000;
  color: #fff;
  border: none;
  text-transform: capitalize;
  letter-spacing: 0;
  font-size: 1.2rem;
  padding: 15px;
  margin: 0 35px;
  position: relative;
  top: -25px;
}

.tags-list {
  background: #f5f5f5;
  padding: 70px 25px 25px;
  margin-top: -65px;
}

.post {
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;

  h3 {
    margin-bottom: 0.5em;
    font-size: 26px;
  }
}

.tags-list ul {
  padding-left: 0;
}

.tags-list li {
  font-family: "Open Sans", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 15px;
  margin: 0 0 10px 10px;
  display: inline-block;
  font-size: 0.7rem !important;
  border: 1px solid #000;
  transition: all 0.3s;
  outline: none;
  font-weight: normal;
  cursor: pointer;
  background: #fff;
  a {
    color: #151D24;
  }
}

.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}

.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    right: -1px;
  }
}

.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}
</style>
