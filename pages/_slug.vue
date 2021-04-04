<template>
  <main class="category individual">
    <section class="head">
      <v-container
          fluid
        >
        <v-row>
          <v-col>
            <v-row>
              <v-col
                :offset-md="page.acf.top_right? 2 : 1"
              >
                <div
                  class="category-header"
                >
                  <h1
                    class="mb-0"
                  >
                    {{ category.name }}
                  </h1>
                  <hr
                    width="100%" 
                    class="andeTeal my-2"
                  />
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                v-if="categoryChildren.length"
                cols="12"
                :md="page.acf.top_right? 4 : 3"
                :offset-md="page.acf.top_right? 2 : 1"
              >
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <p
                      class=""
                    >
                      Выберите одну или несколько категорий
                    </p>
                  </v-col>
                </v-row>
                <div
                  v-if="switches"
                  class="category-switches"
                >
                  <v-switch
                    v-for="(child, index) in categoryChildren"
                    :key="child.id"
                    v-model="switches[index]"
                    :label="child.name"
                    :value="child.id"
                  ></v-switch>
                </div>
              </v-col>
              <v-col
                cols="12"
                :md="(categoryChildren.length ? 2 : 4) * (page.acf.top_right? 2 : 1)"
                :offset-md="!categoryChildren.length ? 2 : ''"
              >
                <p
                  class="mb-0"
                  v-html="page.acf.prologue || category.description.replace(/(?:\r\n|\r|\n)/g, '<br />')"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                :offset="page.acf.top_right? 4: 2"
              >
                <v-btn
                  v-if="page.acf.order_button[0]"
                  large
                  rounded
                  outlined
                  depressed
                  height="3em"
                  width="9.8vw"
                  @click="newMessage(category.name, switches)"
                  class="white--text view-button order-button"
                ><span>Заказать</span></v-btn>
                <div class="mt-12 d-flex flex-row">
                  <hr
                    width="7px"
                    class="andeLightGray mr-1 ml-n3"
                  >
                  <hr
                    width="45px"
                    class="andeLightGray"
                  >
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            v-if="page.acf.top_right"
            v-html="page.acf.top_right"
            class="top-right"
          />
        </v-row>
      </v-container>
    </section>
    <section
      v-if="page.content.rendered"
      class="page-content"
      >
      <v-container
        fluid
      >
        <v-row>
          <v-col
            v-html="page.content.rendered"
          />
        </v-row>
      </v-container>
    </section>
    <section
      v-if="page.acf.services.length"
      class="services"
    >
       <v-container
        fluid
      >
        <v-row>
          <v-col
            v-for="(service, index) in page.acf.services"
            :key="service.title"
            md="6"
            class="service mt-8 mb-16"
          >
            <v-row>
              <v-col
                :offset-md="((index+1)%2)*2"
              >
                <hr
                  v-if="index <= 1"
                  width="45px"
                  class="andeTeal my-2"
                >
                <h2
                  v-html="service.title"
                  class="mb-4"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col
                :offset-md="((index+1)%2)*2 + 2"
                v-html="service.description"
                />
            </v-row>
            <v-row
              class="price">
              <v-col
                :offset-md="((index+1)%2)*2 + 2"
              >
              от
              <p v-html="service.price" />
              рублей
              </v-col>
            </v-row>
            <v-row>
              <v-col
                md="2"
                :offset-md="((index+1)%2)*2 + 2"
              >
                <div class="mt-4 d-flex flex-row">
                  <hr
                    width="7px"
                    class="andeLightGray mr-1 ml-n3"
                  >
                  <hr
                    width="45px"
                    class="andeLightGray"
                  >
                </div>
              </v-col>
              <v-col>
                <v-btn
                  large
                  rounded
                  outlined
                  depressed
                  height="3em"
                  width="9.8vw"
                  @click="newMessage(service.title)"
                  class="white--text view-button order-button"
                ><span>Заказать</span></v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section
      v-if="pCases.length"
      class="cases">
      <v-container
        fluid
      >
        <v-row
          v-for="pCase in filteredPCases"
          :key="pCase.slug"
          class="case"
          :id="pCase.slug"
        >
          <v-col
            cols="12"
            md="3"
            offset-md="1"
            class="d-flex flex-column"
          >
            <div class="subcategories d-flex align-center my-2">
              <hr
                width="45px"
                class="andeTeal"
              >
              <span class="ml-2">
                {{ getCategoryChildrenByIDs(pCase.categories) }}
              </span>
            </div>
            <h2>{{ pCase.title.rendered }}</h2>
            <p
              class="mb-0"
              v-html="pCase.acf.description"
            />
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
            md="8"
            class="slider"
          >
            <p-case-slider
              v-if="pCase.acf.media.length" :images="pCase.acf.media"/>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      slug: this.$route.params.slug,
      option: this.$route.params.option || null,
      switches: []
    }
  },
  computed: {
    category() {
      return this.$store.state.categories.find( cat => cat.slug === this.$route.params.slug )
    },
    categoryChildren() {
      return this.$store.state.categories.filter( cat => cat.parent === this.category.id )
    },
    page() {
      return this.$store.state.pages.find( page => page.categories.includes(this.category.id) )
    },
    pCases() {
      return this.$store.state.pCases.filter( pCase => pCase.categories.includes(this.category.id) )
    },
    filteredPCases() {
      if (this.switches.find(el => el != null)) {
        return this.pCases.filter( pCase => this.switches.filter( value => pCase.categories.includes(value) ).length )
      }
      return this.pCases
    },
  },
  methods: {
    populateChildrenModels() {
      if (this.categoryChildren.length) {
        this.categoryChildren.forEach((child) => {
          this.switches.push( this.option === child.id ? child.id : null)

        })
      }
    },
    getCategoryChildrenByIDs(ids) {
      if (this.categoryChildren.length) {
        let cats = []
        this.categoryChildren.filter(cat => ids.includes(cat.id)).forEach(el => cats.push(el.name))
        return cats.join(', ') 
      }
      return null
    },
    newMessage(message, options) {
      if (options && options.find(el => el != null)) {
        const interestingCategories = this.categoryChildren.filter(({id}) => options.includes(id)),
        n = interestingCategories.length
        if (n) {
          message += ': '
          interestingCategories.forEach((cat, index) => message += cat.name + ((index + 1 != n) ? ', ' : ''))
        }
      }
      this.$nuxt.$emit('set-message', message)
      this.$vuetify.goTo('#footer')
    }
  },
  created() {
    this.$store.dispatch("getPCases")
    this.populateChildrenModels()
  }
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
main.category.individual {
  position: relative;
    
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: url('/img/index_left.png') no-repeat, url('/img/index_right.png') no-repeat;
    background-position: -10% calc(100% + 126px), 110% -20em;
    transform: rotate(180deg);
    z-index: 0;
  }
  
  .container {
    padding: 2.5em 4em 2.5em;
    position: relative;
  }

  section:last-child .container  {
    padding-bottom: 5em;
  }

  h2,h3 {
    font-size: 3.4375em;
    font-weight: 300;
    text-transform: uppercase;
    padding-right: 3em;
    margin: 0;
  }

  h3, h4 {
    font-size: 1.25em;
  }

  .head {
    .container {
      padding: 8.75em 4em 2.5em;

      .category-header {
        width: -moz-fit-content;
        width: fit-content;

        h1 {
          font-size: 7.375em;
          font-weight: 300;
          text-transform: uppercase;
        }
      }

      .category-switches {
        .v-input{
          padding-left: calc(50% - 3em);
        }
      }
    }
  }

  section.services {
    
    ul {
      list-style: none;
      padding-left: 0;
    
      li {

        line-height: 2;

        &::before {
          content: "\2022"; 
          color: var(--v-andeOrange-base);
          font-weight: bold;
          font-size: 2em;
          line-height: 1;
          display: inline-block;
          width: 1em;
          text-align: center;
          margin-left: -1em;
          vertical-align: top;
        }
      }
    }

    .price {
      color: var(--v-andeGray-base);
      font-size: 1.25em;

      p {
        color: var(--v-andeTeal-base);
        font-size: 3.1em;
        font-weight: bold;
        margin: 0 0 -.125em 0;
        line-height: 1;
      }
    }
  }

  section.cases {
      
    .case {
      margin-right: -4em;        
      padding: 0 0 5em 0;

      &:last-child {
        padding-bottom: 0;
      }
      
      .subcategories {
        span {
          font-size: 12px;
          text-transform: uppercase;
        }
      }
      
      h2 {
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 1em;
        @include fluid-type(font-size, 320px, 1366px, 30px, 55px);
      }
    }

    .slider {
        padding-right: 0;
    }
  }

  .v-btn {

    background: var(--v-andeDarkOrange-base);

    &.order-button:before {
      background: url("/img/mail_back1.svg") center bottom no-repeat;
      background-size: cover;
    }

    &.order-button:after {
      content: url("/img/mail.svg");
      background: url("/img/mail_back2.svg") center bottom no-repeat;
      background-size: cover;
    }
  }
}

</style>