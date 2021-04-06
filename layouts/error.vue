<template>
  <section
    class="error-page"
  >
    <v-container
      fluid
    >
      <v-row>
        <v-col
          offset-md="2"
        >
          <hr data-v-5209668b="" width="45px" class="andeTeal my-2">
          <h1 v-if="error.statusCode === 404">СТРАНИЦА НЕ НАЙДЕНА</h1>
          <h1 v-else>На сайте ведутся работы, заходите чуть позже</h1>
          <img src="/img/404.svg" alt="404" class="my-4 d-block">
          <nuxt-link
            exact
            to="/"
          >
            Вернитесь на <span class="andeDarkOrange--text">главную</span>
          </nuxt-link> <span>или </span><br /><span>воспользуйтесь поиском:</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          md="3"
          offset-md="2"
        >
          <app-search fill-color="#EFF5F7" border-color="#E8AF64" ></app-search>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'default',
    created() {
      store.dispatch('getCategories')
    },
    computed: {
      categories() {
        return this.$store.state.categories
      }
    }
  }
</script>

<style lang="scss" scoped>
  section.error-page {
  position: relative;
    
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: url('/img/index_left.png') no-repeat;
      background-position: -10% calc(100% + 126px);
      transform: rotate(180deg);
      z-index: 0;
    }
    
    .container {
      padding: 6.5em 4em 6.5em;
      position: relative;
    }
  }
</style>