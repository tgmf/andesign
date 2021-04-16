<template>
  <section class="masthead" id="masthead">
    <v-container
      fluid
    >
      <v-row>
        <v-col
          class="hero"
          cols="12"
          md="4"
          offset-md="2"
        >
          <h1
            class="moto"
          >
            <v-img
              contain
              max-height="312"
              max-width="503"
              src="/img/moto.png"
              alt="Я пришел в этот мир, чтобы творить!"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="andyOrange lighten-5"
                  />
                </v-row>
              </template>
            </v-img>
          </h1>
          <v-row class="mt-7">
            <v-col
              cols="12"
              md="4"
              offset-md="3"
              class="pa-1"
            >
              <v-btn
                color="andeTeal"
                large
                rounded
                depressed
                height="54px"
                width="9.8vw"
                class="white--text view-button"
                @click="$vuetify.goTo('#portfolio')"
              ><span>Смотреть</span></v-btn>
            </v-col>
            <v-col
              cols="12"
              md="5"
              style="position:relative;"
              class="pa-1"
            >
              <v-sheet 
                class="mx-auto andeDarkOrange hero-order-wrapper"
                rounded="circle"
              >
                <v-btn
                  large
                  rounded
                  outlined
                  depressed
                  height="3em"
                  width="9.8vw"
                  @click.stop="orderButton"
                  class="white--text view-button order-button"
                ><span>Заказать</span></v-btn>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="7"
            >
            <p
            v-html="intro"
            />
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="1"
          offset-md="5"
          class="social"
        >
          <!-- <a
            href="https://ru-ru.facebook.com/profile.php?id=100004352977996"
            target="_blank"
          >
            <v-btn
              fab
              width="45px"
              height="45px"
              elevated="false"
              class="social-fb-button"
            >
              <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="11.4" height="19.5" viewBox="0 0 11.4 19.5" aria-label="fb-alt">
                <title id="fb-alt">Мы в Facebook</title>
                <g id="Facebook-2" data-name="Facebook" transform="translate(-0.25 -0.25)">
                    <path id="fb-Shape" d="M7.05,19.5H3.45a.751.751,0,0,1-.75-.751V12.3H.75A.751.751,0,0,1,0,11.55V7.95A.751.751,0,0,1,.75,7.2H2.7V5.25A5.251,5.251,0,0,1,7.95,0h2.7A.751.751,0,0,1,11.4.75v3.6a.751.751,0,0,1-.751.751H7.95A.148.148,0,0,0,7.8,5.25V7.2H10.65a.75.75,0,0,1,.728.931l-.9,3.6a.75.75,0,0,1-.728.569H7.8V18.75A.751.751,0,0,1,7.05,19.5ZM1.5,8.7v2.1H3.45a.751.751,0,0,1,.751.75V18H6.3V11.55a.751.751,0,0,1,.75-.75H9.165l.525-2.1H7.05A.751.751,0,0,1,6.3,7.95V5.25A1.65,1.65,0,0,1,7.95,3.6H9.9V1.5H7.95A3.749,3.749,0,0,0,4.2,5.25v2.7A.751.751,0,0,1,3.45,8.7Z" transform="translate(0.25 0.25)" fill="#5f6a75"/>
                </g>
              </svg>
            </v-btn>
          </a> -->
          <a
            href="https://www.instagram.com/ande_sign_2004/"
            target="_blank"
          >
            <v-btn
              fab
              width="45px"
              height="45px"
              class="social-ig-button"
              elevated="false"
            >
              <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="18.884" height="18.915" viewBox="0 0 18.884 18.915" aria-labeled="id-alt">
                <title id="ig-alt">Мы в Instagram</title>
                <g id="Instagram-2" data-name="Instagram" transform="translate(-0.558 -0.542)">
                  <path id="ig-Path" d="M0,1A1,1,0,1,1,1,2,1,1,0,0,1,0,1Z" transform="translate(14 4)" fill="#5f6a75"/>
                  <path id="ig-Shape" d="M4.75,9.5A4.75,4.75,0,1,1,9.5,4.75,4.756,4.756,0,0,1,4.75,9.5Zm0-8A3.25,3.25,0,1,0,8,4.75,3.254,3.254,0,0,0,4.75,1.5Z" transform="translate(5.25 5.25)" fill="#5f6a75"/>
                  <path id="ig-Shape-2" data-name="Shape" d="M9.442,18.915a47.567,47.567,0,0,1-5.258-.29,4.426,4.426,0,0,1-2.6-1.242,4.364,4.364,0,0,1-1.271-2.59,46.04,46.04,0,0,1,0-10.669,4.364,4.364,0,0,1,1.271-2.59A4.426,4.426,0,0,1,4.184.291,47.664,47.664,0,0,1,14.7.291a4.425,4.425,0,0,1,2.6,1.242,4.364,4.364,0,0,1,1.271,2.59,45.941,45.941,0,0,1,0,10.669,4.364,4.364,0,0,1-1.271,2.59,4.425,4.425,0,0,1-2.6,1.242A47.585,47.585,0,0,1,9.442,18.915Zm0-17.415a46,46,0,0,0-5.092.281A2.9,2.9,0,0,0,1.8,4.3a44.426,44.426,0,0,0,0,10.32,2.9,2.9,0,0,0,2.55,2.516,46.108,46.108,0,0,0,5.092.281,46.108,46.108,0,0,0,5.092-.281,2.9,2.9,0,0,0,2.55-2.516,44.525,44.525,0,0,0,0-10.32,2.9,2.9,0,0,0-2.55-2.516A46,46,0,0,0,9.442,1.5Z" transform="translate(0.558 0.542)" fill="#5f6a75"/>
                </g>
              </svg>
            </v-btn>
          </a>
          <hr
            class="andeOrange my-4" 
            width="45px"
          />
          <p
            class="andeGray--text"
          >
            Присоединяйтесь<br/>к&nbsp;нам
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          v-for="(service, index) in services" :key="service.descr"
          cols="12"
          md="1"
          :offset-md="index === 0 ? 2 : ''"
          class="comp"
        >
        <span class="with-dot extrude-dot font-weight-black comp-num"
            v-html="index < 9 ? '0' + (index + 1) : index + 1"
        />
        <p
          class="my-0"
          v-html="service.descr"
        />
        </v-col>
      </v-row>
      <v-row>
        <v-col 
          cols="12"
          md="1"
          offset-md="2">
          <span class="scroll-down">прокрутите<br />вниз</span>
        </v-col>
      </v-row>
      <v-row
        class="mt-14 mb-0 fun-facts-head"
      >
        <v-sheet class="fun-facts-head-bg"> </v-sheet>
        <v-col 
          v-for="(fact, index) in facts" 
          :key="fact.title"
          cols="12"
          md="3"
          :offset-md="index == 0 ? 2 : ''"
          class="mb-0 pb-0"
          >
          <!-- <img 
            :src=fact.icon
          > -->
          <hr
            class="andeTeal my-2" 
            width="45px"
          />
          <span
            v-html="fact.featured"
          >
          </span>
        </v-col>
      </v-row>
      <v-row
        class="mt-0 fun-facts-body"
      >
      <v-col
        class="d-none d-md-flex mt-0"
        md="1"
        offset-md="1"
      >
      </v-col>
      <v-col
        v-for="fact in facts"
        :key="fact.title"
        cols="12"
        md="3"
        class="mt-0 py-5"
      >
        <h3>{{ fact.title }}</h3>
        <hr
          class="white my-2"
          width="45px"
        />
        <p>{{ fact.text }}</p>
      </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "AppMasthead",
  data() {
    return {}
  },
  computed: {
    intro() {
      return this.$store.state.mainPage.intro
    },
    services() {
      return this.$store.state.mainPage.services
    },
    facts() {
      return this.$store.state.mainPage.facts
    }
  },
  mounted() {
    this.$store.dispatch('getMainPage')
  },
  methods: {
    orderButton() {
      this.$nuxt.$emit('open-dialog', 'order-form')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
section.masthead {
  display: flex;
  background: transparent;
  color: #333;
  position: relative;
  background-image: url("/img/index_left.png"), url("/img/index_right.png");
  background-repeat: no-repeat;
  background-position: -10% 10%, 112% 90%;
  padding-top: 6em;
  h1 {
    color: white;
    @include fluid-type(font-size, 320px, 1366px, 30px, 65px);
  }

  .container {
    padding: 2.5em 4em .6em;
  }

  .moto {
    font-size: 16px;
    width: 89%;
    margin-left:-2.125em;
    margin-top:1.5em;
    z-index: 1;

    & > div {
      z-index: 1;
    }
  }

  .hero .v-btn {

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

  .hero-order-wrapper {
    cursor: pointer;
    width: 12.3vw;
    height: 12.3vw;
    position: absolute;
    top: calc(-6.15vw + 1.9em);
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("/img/hero-order-btn.png") center top no-repeat;

    &:hover .order-button:after, &:hover .order-button:before {
      top: 0;
    }

    &:hover .order-button span {
      transform: translateY(150%);
    }
  }

  .social {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    * {
      z-index: 1;
    }

    .v-btn {
      margin: 1em 0;
      overflow: hidden;
  
      &::before, &::after {
        content: "";
        margin:auto;
        display: block;
        position: absolute;
        opacity: 1;
        width:100%;
        height:200%;
        top: -300%;
        background: url("/img/fb_back1.svg") center top no-repeat;
        transition: .2s all .2s ease-out;
        background-size: cover;
        border-radius: 0;
        box-shadow: none;
      }

      &::after {
        background: url("/img/fb_back2.svg") center top no-repeat;
        background-size: cover;
        transition: .4s all .2s ease-in;
        top: -200%;
      }

      &.social-ig-button::before {
        background: url("/img/ig_back1.svg") center top no-repeat;
        background-size: cover;
      }

      &.social-ig-button::after {
        background: url("/img/ig_back2.svg") center top no-repeat;
        background-size: cover;
      }

      &:hover::before {
        top: 95%;
      }
      
      &:hover::after {
        top: -5%; 
      }

      & svg * {
        transition: fill .3s ease;
      }

      &:hover svg * {
        fill: white;
      }
    }

    p {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      transform: rotate(180deg);
      font-size: 0.875em;
      text-transform: uppercase;
    }
  }

  .comp {
    line-height: 1.4;
  
    .comp-num {
      font-size: 1.6875em;

      &:before {
        bottom:0.33em;
        left:-0.33em;
        width:calc(100% + 0.66em);
      }
    }
  }

  .scroll-down {
    font-size: 14px;
    color: var(--v-andeTeal-base);
    position: relative;

    &:before {
      content: url("/img/scroll-down.svg");
      display: block;
      position: absolute;
      left: -2em;
      top: .5em;
    }
  }

  .fun-facts-head {

    position: relative;

    img {
      width: auto;
      margin-left: 0.25em;
    }

    span {
      font-size: 6.25em;
      font-weight: 800;
      color:var(--v-andeOrange-base);
      display: block;
      margin-bottom: -0.35em;
    }

    div {
      z-index: 1;
    }

    .fun-facts-head-bg {
      z-index: 0;
      position: absolute;
      left: 10%;
      right: 10%;
      top: 0;
      bottom: -1px;
      background-color: rgba(246, 251, 251, 0.5)!important;
    }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    .fun-facts-head-bg {
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
      background-color: rgba(246, 251, 251, 0.5);
      transition: background-color 0.5s cubic-bezier(1, 0, 0, 1);
    }
  }
}

  .fun-facts-body {
    div {
      background-color: var(--v-andeOrange-base);
    
      &:first-child {
        background-image: url("/img/Layer_x0020_13.png");
        background-position: 85% 30%;
        background-repeat: no-repeat;
        border-top-left-radius: 1em;
      }
    
      &:last-child {
        background-image: url("/img/Layer_x0020_12.png");
        background-position: -150% 0%;
        background-repeat: no-repeat;
        border-top-right-radius: 1em;
      }

      h3 {
        font-size: 1.4375em;
        text-transform: uppercase;
        max-width: 10em;
      }

      p {
        max-width: 67%;
      }
    }
  }
}
</style>