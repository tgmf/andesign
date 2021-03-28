<template>
  <v-app>
    <app-nav />
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppNav
  }
};
</script>

<style lang="scss">
html {
  font-family: "Circe", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #F6FBFB;
}

.v-application {
    font-family: "Circe", sans-serif;
    line-height: 1.2;
}

h1,
h2,
h3 {
  font-family: "Circe", serif;
  font-weight: bold;
  color: #151D24;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
}

.individual h3 {
  margin: 2em 0 25px;
}

h1 {
  margin-bottom: 30px;
  text-align: center;
}

img {
  width: 100%;
}

video {
  width: 100%;
  margin: 25px 0;
}

small {
  color: #9d5615;
}

pre,
code {
  white-space: pre-wrap; /* css-3 */
  white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  white-space: -pre-wrap; /* Opera 4-6 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word; /* Internet Explorer 5.5+ */
  background: #eee;
  border-radius: 4px;
}

pre {
  padding: 8px 10px;
}

code {
  padding: 2px 0;
  line-height: 1.5;
}

p {
  margin: 15px 0 20px;
  color: #151D24;
  line-height: 1.4;
}

hr {
  height: 7px;
  border:none;
  border-radius: 4px;
}

.with-dot {
  position: relative;
  z-index: 0;
}

.with-dot:before {
  content: "";
  width:7px;
  height:7px;
  border-radius: 9999px;
  background-color: #E8AF64;
  display: block;
  position: absolute;
  bottom:.3em;
  left: -.3em;
  z-index: -1;
}

.with-dot.ease-width:before {
  transition: .1s width .3s ease;
}

.with-dot.ease-width:hover:before, .nuxt-link-active:before, .with-dot.dot-active.ease-width:before, .with-dot.extrude-dot:before {
  width: calc(100% + .6em);
}

.with-dot.ease-opacity:before {
  transition: opacity .3s ease;
}

.with-dot.ease-opacity:hover:before, .with-dot.dot-active.ease-opacity:before {
  opacity: 0;
}

.with-dot.ease-height:before {
  transition: height .3s ease;
}
.with-dot.ease-height:hover:before, .with-dot.dot-active.ease-height:before {
  height: 0;
}

.v-btn.view-button {
  overflow: hidden;
  position: relative;
  font-size: 1.125em;
  font-weight: bold;
  text-align: center;

  & span {
    transition: .2s transform .3s ease-out;
  }

  &:before, &:after {
    content: "";
    margin:auto;
    display: block;
    position: absolute;
    opacity: 1;
    width:100%;
    height:200%;
    top: -300%;
    background: url('/eye_back1.svg') center bottom no-repeat;
    transition: .2s all .2s ease-out;
    background-size: cover;
  }

  &:after {
    content: url("/eye.svg");
    background: url('/eye_back2.svg') center bottom no-repeat;
    background-size: cover;
    transition: .4s all .2s ease-in;
    padding-top: 1.125em;
    top: -200%;
  }

  &:hover span {
    transform: translateY(150%);
  }

  &:hover:before, &:hover:after {
    top: 0;
    opacity:1;
  }
}

</style>
