<template>
  <section class="portfolio" id="portfolio">
    <v-container
      fluid
    >
      <v-row
        v-for="(category, index) in parentCategories"
        :key="category.id"
        :class="[{even: (index%2 && category.count > 1) }, {'has-portfolio': category.count > 1 }, category.acf.theme, 'category']"
        :id="category.slug"
      >
        <v-col
          cols="12"
          md="4"
          :offset-md="(index%2 && category.count > 1)  ? 0:1"
          :order-md="(index%2 && category.count > 1)  ? 1:0"
        >
        <img
          :src="category.acf.cat_icon"
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
              :md="category.count === 1 ? 8 : 6"
              class="subcategories d-flex flex-column"
            >
              <ul
                v-if="category.count > 1"
              >
                <li v-for="child in getCategoryChildren(category.id)"
                  :key="child.id"
                >
                  <nuxt-link
                    :to="{ name: 'slug', params: { slug: category.slug, option: child.id } }"
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
                :class="[{'mb-auto': category.count > 1 }, {'mb-8': category.count === 1 }, 'white--text', 'view-button', 'mt-2']"
                width="9.8vw"
                :to="{ path: '/' + category.slug }"
              ><span>Смотреть</span></v-btn>
              <p
                v-if="category.count === 1"
                class="mb-auto"
                v-html="category.description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
              />
              <div
                class="mt-12 d-flex flex-row justify-center"
                v-if="index !== parentCategories.length - 1"
              >
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
              v-if="category.count > 1"
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
          v-if="category.count > 1"
          cols="12"
          md="7"
        >
          <portfolio-slider :category="category.id" :theme="category.acf.theme" :even="index%2 ? true : false"></portfolio-slider>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import PortfolioSlider from './PortfolioSlider.vue';
export default {
  components: { PortfolioSlider },
  name: "Portfolio",
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    };
  },
  computed: {
    parentCategories() {
      return this.categories.filter( cat => cat.parent == 0 )
    }
  },
  created() {
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
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url('/img/index_left.png') no-repeat, url('/img/index_right.png') no-repeat;
    background-position: -10% 20vh, 112% -14vh;
    mix-blend-mode: darken;
    transform: rotate(180deg);
  }

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 1em;
    @include fluid-type(font-size, 320px, 1366px, 30px, 55px);
  }

  .container {
    padding: 2.5em 4em;
    position: relative;
  }

  .category {
    padding: 3em 0;
    padding-left: 4em;
    margin-right: -4em;
    margin-left: -4em;

    &.has-portfolio {
      background: var(--v-background-base);
    }

    .v-slide-group__wrapper {
      margin-right: -1em;
    }

    &.even {
      padding-right: 4em;
      padding-left: 0;

      .v-slide-group__wrapper {
        margin-right: 0;
        margin-left: -1em;
      }
    }

    &.dark {
      background: radial-gradient(circle at 100% 0, #5F6A75, #151D24 25%);
      color: #fff;
      margin-left: -4em;
      margin-right: -4em;

      h2 {
        color: var(--v-andeOrange-base);
      }

      p, span, a {
        color: #fff!important;
      }

      .with-dot:before {
        background-color: var(--v-andeTeal-base);
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