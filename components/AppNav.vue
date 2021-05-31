<template>
  <div class="nav-container">
    <v-app-bar 
      :class="[{'order-form-active' : orderFormActive}, {'sidebar-active' : sidebar}, 'nav']"
      fixed
      flat
      :height="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 70 : 96"
      :color="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 'transparent' : 'white'"
      tag="nav"
    >
      <v-container
        fluid
      >
        <v-row>
          <v-col
            cols="6"
            md="3"
            lg="2"
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
            cols="6"
            class="d-flex d-md-none"
          >
            <v-spacer/>
            <span>      
              <v-app-bar-nav-icon @click="sidebar = !sidebar">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.833" height="19.667" viewBox="0 0 25.833 19.667">
                  <line id="Line_17" data-name="Line 17" x2="23.833" transform="translate(1 18.667)" fill="none" stroke="#f6fbfb" stroke-linecap="round" stroke-width="2"/>
                  <line id="Line_15" data-name="Line 15" x2="23.833" transform="translate(1 1)" fill="none" stroke="#f6fbfb" stroke-linecap="round" stroke-width="2"/>
                  <line id="Line_18" data-name="Line 18" x2="23.833" transform="translate(1 9.833)" fill="none" stroke="#f6fbfb" stroke-linecap="round" stroke-width="2"/>
                </svg>
              </v-app-bar-nav-icon>
            </span>
          </v-col>
          <v-col
            md="9"
            class="d-none d-md-block d-lg-none"
          >
            <v-slide-group
              class="nav-menu"
              show-arrows
            >
              <v-slide-item
                v-for="link in navItems"
                :key="link.slug"
                class="mx-5"
              >
                <span
                  v-if="$route.name === 'index'"
                  @click="$vuetify.goTo('#'+link.slug)"
                  class="with-dot ease-width"
                >
                  {{ link.name }}
                </span>
                <nuxt-link
                  v-else
                  :to="'/' + link.slug"
                  class="with-dot ease-width"
                >
                  {{ link.name }}
                </nuxt-link>
              </v-slide-item>
              <template v-slot:prev>
                <v-btn
                  fab
                  depressed
                  elevation="0"
                  color="andeLightGray"
                  class="prev-button"
                  ref="prevMenuItem"
                >&nbsp;</v-btn>
              </template>
              <template v-slot:next>
                <v-btn
                  fab
                  depressed
                  elevation="0"
                  color="andeLightGray"
                  class="next-button"
                  ref="nextMenuItem"
                >&nbsp;</v-btn>
              </template>
            </v-slide-group>
          </v-col>
          <v-col
            cols="12"
            lg="7"
            class="d-none d-lg-block"
          >
            <ul class="nav-menu">
              <li v-for="link in navItems" :key="link.slug">
                <span
                  v-if="$route.name === 'index'"
                  @click="$vuetify.goTo('#'+link.slug)"
                  class="with-dot ease-width"
                >
                  {{ link.name }}
                </span>
                <nuxt-link
                  v-else
                  :to="'/' + link.slug"
                  class="with-dot ease-width">
                    {{ link.name }}
                  </nuxt-link>
              </li>
            </ul>
          </v-col>
          <v-col
            cols="12"
            lg="3"
            xl="2"
            offset-xl="1"
            class="d-none d-lg-block"
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
    <v-navigation-drawer
      v-model="sidebar"
      absolute
      temporary
      hide-overlay
      class="d-flex d-sm-none"
    >
      <v-list
        nav
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
          v-for="link in navItems"
          :key="link.slug"
          >
            <span
              v-if="$route.name === 'index'"
              @click="$vuetify.goTo('#'+link.slug)"
              class="with-dot ease-width"
            >
              {{ link.name }}
            </span>
            <nuxt-link
              v-else
              :to="'/' + link.slug"
              class="with-dot ease-width">
                {{ link.name }}
              </nuxt-link>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  import AppIcon from "./AppIcon.vue"
  import SearchToggle from "./SearchToggle.vue"
  import NavContacts from "./NavContacts.vue"

  export default {
    name: "AppNav",
    components: {
      AppIcon,
      SearchToggle,
      NavContacts
    },
    props: {
      categories: {
        type: Array,
        default: () => [
          {}
        ]
      }
    },
    data(){
      return {
        brand: 'ЭндиЗайн',
        orderFormActive: false,
        sidebar: false,
        group: null,
      }
    },
    computed: {
      navItems() {
        return this.categories.filter( cat => cat.parent === 0 );
      }
    },
    created() {
      this.$nuxt.$on('open-dialog', () => {
        this.orderFormActive = true
      })
      this.$nuxt.$on('close-dialog', () => {
        this.orderFormActive = false
      })
    }
  };
</script>

<style lang="scss" scoped>
  .nav {
    color: #000;
    border-bottom-left-radius: 2em!important;
    border-bottom-right-radius: 2em!important;
    transition: height .5s ease-out, background-color .5s ease-out;

    @media only screen and (min-width: 960px) {
      background-color: rgba(255, 255, 255, 0.75)!important;
    }

    .container {
      padding: .75em .25em;

      @media only screen and (min-width: 960px) {
        padding: .75em .5em;
      }

      @media only screen and (min-width: 1424px) {
        padding: .75em 3em;
      }

      .row {
        align-items: center;
      }
    }

    a, span {
      color: #5F6A75;
      font-size: 14px;
      font-weight: bold;
    }

    .v-btn.v-btn--icon.v-size--default {
      content: "";
      width: 56px;
      height: 56px;
      background-color: var(--v-andeDarkOrange-base);
      border-radius: 9999px;

      i {
        color: white;
      }
    }

    &.order-form-active {
      height:100vh!important;
    }
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    @media only screen and (min-width: 960px) {
      .nav {
        -webkit-backdrop-filter: blur(10px);
        backdrop-filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.75);
        transition: background-color 0.5s cubic-bezier(1, 0, 0, 1);
      }
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

      a, span {
        position: relative;
        text-transform: uppercase;
        margin: 0 16px 0 0;
        cursor: pointer;
      }

      &:last-child span, &:last-child a {
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

<style lang="scss">
  .nav-menu.v-slide-group {
    .v-slide-group__prev--disabled, .v-slide-group__next--disabled {
      display: none !important;
    }

    .v-slide-group__content {

      height: 1em;
      align-self: center;

      a, span {
        position: relative;
        text-transform: uppercase;
        margin: 0 2em;
        cursor: pointer;
      }

      &:last-child span, &:last-child a {
        margin: 0;
      }
    }

    .v-btn {
      z-index: 1;
      overflow: hidden;
      width: 56px;
      height: 56px;
      border-radius: 9999px;

      &.prev-button {
        margin-right: 0;
      }

      &.next-button {
        margin-left: 0;
      }
    }
  
    .prev-button::before, .next-button::before {
      content: "";
      width: 56px;
      height: 56px;
      border-radius: 9999px;
      transition: .2s all .2s ease-out;
      opacity: 1;
      background-color: var(--v-andeDarkOrange-base);
    }

    .prev-button:active::before, .next-button:active::before {
      background-position: center top;
      background-color: currentColor;
    }

    .prev-button::after, .next-button::after {
      content: url("/img/forward.svg");
      position: absolute;
      transition: .4s all .2s ease-in;
      opacity: 1;
      width: 56px;
      height: 56px;
      border-radius: 9999px;
      padding: 10px 20px;
    }

    .prev-button::after {
      content: url("/img/back.svg");
      padding: 10px 8px;
    }

    .next-button:hover::after, .prev-button:hover::after {
      background-position: center top;
    }
  }
</style>