<template>
  <section class="portfolio" id="portfolio">
    <v-container
      fluid
    >
      <v-row
        v-for="(category, index) in parentCategories"
        :key="category.id"
        :class="[{even : index%2}, 'category']"
      >
        <v-col
          cols="12"
          md="4"
          :offset-md="index%2 ? 0:1"
          :order-md="index%2 ? 1:0"
        >
        <img
          :src="category.cat_icon"
          class="category-icon"
        />
        <hr
          width="45px"
          class="andeTeal my-2"
        >
          <h2>{{ category.name }}</h2>
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="subcategories d-flex flex-column"
            >
              <ul>
                <li v-for="child in getCategoryChildren(category.id)"
                  :key="child.id"
                >
                  <nuxt-link
                    :to="{ path: '/' + category.slug, params: { sub: child.id } }"
                    class="with-dot ease-width"
                  >
                    {{ child.name }}
                  </nuxt-link>
                </li>
              </ul>
              <v-btn
                color="andeTeal"
                large
                rounded
                depressed
                height="54px"
                class="white--text view-button mt-2 mb-auto"
                width="9.8vw"
                :to="{ path: '/' + category.slug }"
              ><span>Смотреть</span></v-btn>
              <div class="mt-12 d-flex flex-row justify-center">
                <hr
                  width="7px"
                  class="andeLightGray mr-1 ml-16"
                >
                <hr
                  width="45px"
                  class="andeLightGray"
                >
              </div>
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="category-description d-flex align-end"
            >
              <p
                class="mb-0"
                v-html="category.description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="7"
        >
          <portfolio-category :category="category.id" :theme="category.theme" :even="index%2 ? true : false"></portfolio-category>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PortfolioCategory from './PortfolioCategory.vue';
export default {
  components: { PortfolioCategory },
  name: "Portfolio",
  data() {
    return {
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    parentCategories() {
      return this.categories.filter( cat => cat.parent == 0 )
    }
  },
  created() {
    this.$store.dispatch("getCategories")
  },
  methods: {
    getCategoryChildren (id) {
      return this.categories.filter( cat => cat.parent == id )
    },
  }
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
section.portfolio {
  display: flex;
  background: var(--v-background-base);
  color: #333;
  position: relative;
  h2 {
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 1em;
    @include fluid-type(font-size, 320px, 1366px, 30px, 55px);
  }

  .container {
    padding: 2.5em 4em;
  }

  .category {
    padding: 3em 0;
    margin-right: -4em;

    .v-slide-group__wrapper {
      margin-right: -1em;
    }

    &.even {
      margin-right: 0;
      margin-left: -4em;

      .v-slide-group__wrapper {
        margin-right: 0;
        margin-left: -1em;
      }
    }

    .category-icon {
      width: 1.1em;
    }

    .subcategories {
      ul {
        padding-left: 0;
      
        li {
          margin-bottom: 2em;
          list-style: none;
        
          a {
            font-size: 1.25em;
            text-transform: uppercase;
            color: #151D24;
          }
        }
      }
    }
  }
}
</style>