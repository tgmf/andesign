<template>
  <v-app-bar 
    class="nav"
    fixed
    flat
    height="96"
    color="white"
    app
    tag="nav"
  >
    <v-container
      fluid
    >
      <span class="hidden-sm-and-up">      
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      </span>
      <v-row>
        <v-col
          cols="12"
          md="2"
        >
          <v-app-bar-title>
          <nuxt-link
            exact
            to="/"
          >
              <app-icon :brand="brand"></app-icon>
            </nuxt-link>
          </v-app-bar-title>
        </v-col>
        <v-col
          cols="12"
          md="7"
        >
          <ul class="nav-menu">
            <li v-for="link in navItems" :key="link.title">
              <nuxt-link :to="link.path" class="with-dot ease-width">{{link.title}}</nuxt-link>
            </li>
          </ul>
        </v-col>
        <v-col
          cols="12"
          md="3"
          xl="2"
          offset-xl="1"
        >
        <ul>
          <li>
            <search-toggle></search-toggle>
          </li>
          <li>
            <nav-contacts></nav-contacts>
          </li>
        </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";
import SearchToggle from "@/components/SearchToggle.vue";
import NavContacts from "@/components/NavContacts.vue";

export default {
  name: "AppFooter",
  components: {
    AppIcon,
    SearchToggle,
    NavContacts
  },
  data(){
    return {
      brand: 'ЭндиЗайн',
      sidebar: false,
      offsetTop: 0,
      navItems: [
          { title: 'Дизайн', path: '/about'},
          { title: 'Навигация', path: '/about'},
          { title: 'Мебель', path: '/about'},
          { title: 'Свет', path: '/about'},
          { title: 'Проектирование', path: '/about'},
          { title: 'Строительство', path: '/about'},
          { title: 'Полиграфия', path: '/about'}
     ]
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  color: #000;
  border-bottom-left-radius: 2em!important;
  border-bottom-right-radius: 2em!important;

  .container {
  padding: .75em 3em;

    .row {
      align-items:center;
    }
  }

  a, span {
    color: #5F6A75;
    font-size: 14px;
    font-weight: bold;
  }
  &.v-app-bar--is-scrolled {
    background-color: rgba(255, 255, 255, 0.75)!important;
  }
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .nav {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.75);
    transition: background-color 0.5s cubic-bezier(1, 0, 0, 1);
  }
}

ul {
  justify-content: flex-end;
  display: flex;
  flex-direction: row;
  padding-left:0;
  flex-wrap: wrap;

  &.nav-menu {
    justify-content: space-between;
  }

  li {
    display: flex;
    align-items: center;

    a {
      position: relative;
      text-transform: uppercase;
      margin: 0 16px 0 0;
    }

    &:last-child a {
      margin: 0;
    }
  }
   
}

.with-dot:before {
  bottom: 0;
  left: -.5em;
}

.with-dot.ease-width:hover:before, .nuxt-link-active:before, .with-dot.dot-active.ease-width:before {
  width: calc(100% + 1em);
}
</style>
