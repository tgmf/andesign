<template>
  <v-slide-group
    class="case-slider"
    ref="caseSlider"
  >
    <v-slide-item
      v-for="image in images"
      :key="image.id"
      ref="caseItem"
    >
      <v-sheet
        :width="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? '82vw' : $vuetify.breakpoint.md ? '65vw' : '54vw'"
      >
        <v-row
          class="fill-height"
        >
          <v-col
            cols="12"
            md="10"
          >
              <v-img
                :src="image.url"
                width="100%"
                :aspect-ratio="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 1.14 : 1.4"
              />
          </v-col>
          <v-col
            cols="12"
            md="2"
            class="d-flex flex-column"
          >
            <hr
              v-if="image.caption"
              class="plain andeLightGray mt-16 d-none d-md-block"
            />
            <p
              v-html="image.caption"
            />
            <v-spacer/>
            <div
              v-if="images.length > 1"
              class="nav-buttons d-none d-sm-flex">
              <p
              class="d-none d-md-block">
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
  name: "PCaseSlider",
  props: {
    images: {
      type: Array,
      default: ()=> []
    }
  },
  data() {
    return {
      prevIsDisabled: !this.even,
      nextIsDisabled: this.even
    };
  },
  computed: {
  },
  created() {
  },
  mounted() {
  },
  methods: {
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
div.case-slider {

  .v-sheet {
    background: transparent;

    .row {
      margin: 0;
  
      h3 {
        font-size: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        color: var(--v-andeOrange-base);
        margin-bottom: 1em;
        white-space: normal;
      }

      hr {
        height: 2px;
        margin-left: -24px;
        position: relative;
      }

      p {
        white-space: normal;
        color: var(--v-andeGray-base);
        font-size:.75em;
      }

      .nav-buttons {
        right: -4vw;

        @media only screen and (min-width: 960px) {
          right: auto;
        }

        p {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-size: .75em;
          max-height: 50px;
          margin: 3em 0 .5em 1.5em;
        }

        .v-btn {
          z-index: 1;
          overflow: hidden;
          width: 56px;
          height: 56px;
          border-radius: 9999px;
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
      }
    }
  }
}
</style>
<style lang="scss">
  // .slider-container .v-slide-group__next, .slider-container .v-slide-group__prev {
  //   display: none !important;
  // }
</style>