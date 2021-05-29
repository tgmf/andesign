<template>
  <v-slide-group
    :class="[{even : even}, 'case-slider']"
    ref="caseSlider"
  >
    <v-slide-item
      v-for="pCase in pCases"
      :key="category + pCase.id"
      ref="caseItem"
    >
      <v-sheet
        :width="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? '90vw' : '46vw'"
      >
        <v-row
          class="fill-height"
        >
          <v-col
            cols="11"
            md="10"
            :order-md="even? 2 : 1"
          >
              <v-img
                :src="pCase.acf.media[0].url"
                width="100%"
                aspect-ratio="1.4"
              />
          </v-col>
          <v-col
            cols="12"
            md="2"
            :order-md="even ? 1 : 2"
            class="d-flex flex-column"
          >
            <h3
              v-html="pCase.title.rendered"
            />
            <hr
              class="plain andeLightGray d-none d-md-block"
            />
            <p
              v-if="pCase.acf.media[0].caption"
              v-html="pCase.acf.media[0].caption"
            />
            <v-spacer/>
            <div class="checkTheCaseOut">
              <p
                @click="openCaseViewer(pCase)"
                class="d-none d-md-block"
              >
                cмотреть<br/>проект
              </p>
              <v-btn
                fab
                depressed
                elevation="0"
                color="andeLightGray"
                class="view-button"
                @click="openCaseViewer(pCase)"
              >&nbsp;</v-btn>

            </div>
            <div class="nav-buttons">
              <p
                class="d-none d-md-block"
              >
                еще
              </p>
              <v-btn
                fab
                depressed
                :disabled="nextIsDisabled"
                elevation="0"
                color="andeLightGray"
                :class="[{'mb-15' : prevIsDisabled, 'mb-2' : !prevIsDisabled}, 'next-button']"
                @click="nextSlide"
                ref="nextButton"
              >&nbsp;</v-btn>
              <v-btn
                fab
                depressed
                :disabled="prevIsDisabled"
                elevation="0"
                color="andeLightGray"
                :class="[{'mb-15' : nextIsDisabled}, 'prev-button']"
                @click="prevSlide"
                ref="prevButton"
              >&nbsp;</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "PortfolioSlider",
  props: {
    category: {
      type: Number,
      default: null
    },
    theme: {
      type: String,
      default: "light"
    },
    even: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      prevIsDisabled: !this.even,
      nextIsDisabled: this.even
    };
  },
  computed: {
    pCases () {
      return this.$store.state.pCases.filter( pCase => pCase.categories.includes(this.category) )
    }
  },
  created() {
  },
  mounted() {
    this.$nextTick(function () {
      if (this.even) this.setSlide()
    })
  },
  methods: {
    setSlide () {
      const wrapperWidth = this.$refs.caseSlider.$refs.wrapper.clientWidth,
      contentWidth = this.$refs.caseSlider.$refs.content.clientWidth
      return this.$refs.caseSlider.scrollOffset = contentWidth - wrapperWidth
    },
    nextSlide () {
      this.prevIsDisabled = false
      const itemWidth = this.$refs.caseItem[0].$el.clientWidth,
      contentWidth = this.$refs.caseSlider.$refs.content.clientWidth,
      wrapperWidth = this.$refs.caseSlider.$refs.wrapper.clientWidth,
      limit = this.even ? contentWidth - wrapperWidth : contentWidth - itemWidth - 1
      if (this.$refs.caseSlider.scrollOffset + itemWidth >= limit) {
        this.$refs.caseSlider.scrollOffset = limit
        return this.nextIsDisabled = true
      }
      return this.$refs.caseSlider.scrollOffset += itemWidth
    },
    prevSlide () {
      this.nextIsDisabled = false
      const itemWidth = this.$refs.caseItem[0].$el.clientWidth,
      wrapperWidth = this.$refs.caseSlider.$refs.wrapper.clientWidth,
      limit = this.even ? itemWidth - wrapperWidth + 1 : 0
      if (this.$refs.caseSlider.scrollOffset - itemWidth <= limit ) {
        this.$refs.caseSlider.scrollOffset = limit
        return this.prevIsDisabled = true
      }
      return this.$refs.caseSlider.scrollOffset -= itemWidth
    },
    openCaseViewer(pCase) {
      this.$nuxt.$emit('open-case-viewer', pCase)
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/mixins.scss";
div.case-slider {

  .v-sheet {
    background: transparent;

    .row {
      margin: 0 -.75em;
      position: relative;

      @media only screen and (min-width: 960px) {
        margin: 0;
      }
  
      h3 {
        font-size: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        color: var(--v-andeOrange-base);
        margin-bottom: 1em;
        white-space: normal;

        .even & {
          text-align: right;
        }
      }

      hr {
        height: 2px;
        margin-left: -24px;
        position: relative;

        .even & {
        margin-right: -24px;
        margin-left: 0;
        }
      }

      p {
        white-space: normal;
        color: var(--v-andeGray-base);
        font-size:.75em;

        .even & {
          text-align: right;
        }
      }

      .checkTheCaseOut p, .nav-buttons p {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        transform: rotate(180deg);
        font-size: .75em;
        max-height: 50px;
        margin: 2em 0 .5em .75em;
      }

      .checkTheCaseOut {
        position: absolute;
        right: 0;
        top: 10vw;
        z-index: 1;

        @media only screen and (min-width: 960px) {
          position: relative;
          right: auto;
          top: auto;
        }

        .even & {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          p {
            transform: rotate(0);
            margin: 2em 0.75em .5em 0;
          }
        }
      }

      .view-button span {
        background: url("/img/eye_orange.svg") center center no-repeat;
      }

      .nav-buttons {

        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        top: calc(10vw + 4em);

        @media only screen and (min-width: 960px) {
          position: relative;
          right: auto;
          top: auto;
        }

        p {
          margin: 3em 0 .5em 1.6em;
          width: 100%;
        }
        
        .even & {
          align-items: flex-end;

          p {
            transform: rotate(0);
            margin: 3em 1.5em .5em 0;
            min-width: 56px;
            flex: 1;
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
          background-color: var(--v-andeDarkOrange-base);
          border-radius: 9999px;
          background-image: url("/img/mail_back2.svg");
          background-repeat: no-repeat;
          background-position: center -134px;
          transition: .2s all .2s ease-out;
          opacity: 1;
        }

        .prev-button:hover::before, .next-button:hover::before {
          background-position: center top;
        }

        .prev-button::after, .next-button::after {
          content: url("/img/forward.svg");
          position: absolute;
          background-color: transparent;
          background-image: url("/img/mail_back1.svg");
          background-repeat: no-repeat;
          background-position: center -134px;
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

        .v-btn--disabled {
          display: none;
        }
      }
    }
  }

  .v-slide-group__next, .v-slide-group__prev {
    display: none !important;
  }  
}
</style>