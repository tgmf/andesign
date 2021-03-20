<template>
  <div class="nav">
    <ul>
      <li>
        <nuxt-link exact to="/">
          <app-icon></app-icon>
        </nuxt-link>
      </li>
      <li class="nav-menu">
        <nuxt-link to="/about" class="with-animated-dot">Дизайн</nuxt-link>
        <nuxt-link to="/about" class="with-animated-dot">Навигация</nuxt-link>
        <nuxt-link to="/about" class="with-animated-dot">Мебель</nuxt-link>
        <nuxt-link to="/about" class="with-animated-dot">Свет</nuxt-link>
        <nuxt-link to="/about" class="with-animated-dot">Проектирование</nuxt-link>
        <nuxt-link to="/about" class="with-animated-dot">Строительство</nuxt-link>
        <nuxt-link to="/about" class="with-animated-dot">Полиграфия</nuxt-link>
      </li>
      <li>
        <app-search-toggle></app-search-toggle>
        <app-contacts></app-contacts>
      </li>
    </ul>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";
import AppSearchToggle from "@/components/AppSearchToggle.vue";
import AppContacts from "@/components/AppContacts.vue";

export default {
  components: {
    AppIcon,
    AppSearchToggle,
    AppContacts
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: rgba(255, 255, 255, 0.9);
  color: #000;
  padding: 1em 100px;
  position: fixed;
  height: 6em;
  border-bottom-left-radius: 2em;
  border-bottom-right-radius: 2em;
  a, span {
    color: #5F6A75;
    font-size: 14px;
    font-weight: bold;
  }
}

@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
  .nav {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.75);  
  }
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

ul {
  padding-left: 0;
  width: 100%;
  justify-content: space-between;
  display: flex;

  li {
    display: flex;
    margin-right: 30px;
    align-items: center;
  }

  .nav-menu a {
    position: relative;
    text-transform: uppercase;
    margin: 0 32px;
  }
}
</style>
