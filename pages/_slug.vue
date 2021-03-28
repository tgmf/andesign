<template>
  <main class="post individual">
    <h1>{{ pCase.title.rendered }}</h1>
    <small class="date">{{ pCase.date | dateformat }}</small>
    <section v-html="pCase.content.rendered"></section>
  </main>
</template>

<script>
export default {
  computed: {
    pCases() {
      return this.$store.state.pCases;
    },
    pCase() {
      return this.pCases.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPCases");
  }
};
</script>

<style lang="scss" scoped>
main.post {
  margin: 60px auto 50px;
  max-width: 800px;
  padding: 0 30px 70px;
}

h1 {
  color: black;
  font-size: 40px;
}

section {
  color: #444;
}

.date {
  text-align: center;
}
</style>