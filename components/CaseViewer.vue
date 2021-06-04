<template>
  <v-slide-group
    class="case-slider case-viewer"
    ref="portfolioCaseSlider"
  >
    <v-slide-item
      v-for="image in pCase.acf.media"
      :key="image.id"
      ref="portfolioCaseItem"
    >
      <v-sheet
        width="100vw"
        height="100vh"
      >
        <v-container
          fluid
        >
          <v-row
            class="fill-height justify-content-center align-center"
          >
            <v-col
              cols="12"
              md="1"
            >
              <div
                v-if="pCase.acf.media.length > 1"
                class="nav-buttons"
              >
                <v-btn
                  fab
                  depressed
                  :disabled="prevIsDisabled"
                  elevation="0"
                  color="andeLightGray"
                  class="prev-button ml-md-auto"
                  @click="prevSlide"
                  ref="prevButton"
                >&nbsp;</v-btn>
              </div>
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
                <v-img
                  :src="image.url"
                  width="90%"
                  max-height="100%"
                  aspect-ratio="1.778"
                  class="mx-auto"
                />
            </v-col>
            <v-col
              cols="12"
              md="1"
              class="d-flex flex-column"
            >
              <h3
                v-html="pCase.title.rendered"
              />
              <hr
                class="andeLightGray my-6 d-none d-md-block"
              />
              <p
                v-html="image.caption"
              />
              <v-spacer/>
              <div
                v-if="pCase.acf.media.length > 1"
                class="nav-buttons mt-md-2 mb-md-6">
                <v-btn
                  fab
                  depressed
                  :disabled="nextIsDisabled"
                  elevation="0"
                  color="andeLightGray"
                  class="next-button"
                  @click="nextSlide"
                  ref="nextButton"
                >&nbsp;</v-btn>
              </div>
              <div class="close-button">
                <v-btn
                  fab
                  depressed
                  elevation="0"
                  color="andeLightGray"
                  class="view-button"
                  @click="close()"
                >&nbsp;</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  name: "CaseViewer",
  props: {
    pCase: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      prevIsDisabled: true,
      nextIsDisabled: false
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    nextSlide() {
      this.prevIsDisabled = false
      const itemWidth = this.$refs.portfolioCaseItem[0].$el.clientWidth,
      contentWidth = this.$refs.portfolioCaseSlider.$refs.content.clientWidth,
      limit = contentWidth - itemWidth - 1
      if (this.$refs.portfolioCaseSlider.scrollOffset + itemWidth >= limit) {
        this.$refs.portfolioCaseSlider.scrollOffset = limit
        return this.nextIsDisabled = true
      }
      return this.$refs.portfolioCaseSlider.scrollOffset += itemWidth
    },
    prevSlide() {
      this.nextIsDisabled = false
      const itemWidth = this.$refs.portfolioCaseItem[0].$el.clientWidth
      if (this.$refs.portfolioCaseSlider.scrollOffset - itemWidth <= 0 ) {
        this.$refs.portfolioCaseSlider.scrollOffset = 0
        return this.prevIsDisabled = true
      }
      return this.$refs.portfolioCaseSlider.scrollOffset -= itemWidth
    },
    close() {
      this.$refs.portfolioCaseSlider.scrollOffset = 0
      this.prevIsDisabled = true
      this.nextIsDisabled = false
      return this.$nuxt.$emit('close-case-viewer')
    },
  }
};
</script>

<style lang="scss" scope>
div.case-slider.case-viewer {
  .v-sheet {
    .container {
      padding: 6.5em 1.25em;
      height:100%;
      
      @media only screen and (min-width: 960px) {
      padding: 6.5em 1.5em;
      }
      
      @media only screen and (min-width: 960px) {
      padding: 6.5em 4em;
      }

      hr {
        height: 7px;
        margin-left: 0;
      }
      
      div.close-button {
        position: absolute;
        right: 5vw;
        top: 0;
        
        @media only screen and (min-width: 960px) {
          position: relative;
          right: auto;
          top: auto;
        }

        .v-btn.view-button span {
          background: url(/img/close.svg) center center no-repeat;
        }

        .view-button:after {
          padding-top: .9em;
          content: url(/img/close_white.svg);
        }
      }

      .nav-buttons {
        left: 5vw;
      }
    }
  }
}
</style>