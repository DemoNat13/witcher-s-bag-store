<template>
  <v-app>
    <v-app-bar
      v-if="isMobile"
      class="page-header_mobile py-2"
      color="black"
      dark
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />

      <router-link
        :to="{path: '/'}"
      >
        <v-toolbar-title
          class="page-header__title d-flex"
        >
          СУМКА
          <v-img
            src="@/assets/logo.png"
            alt="Логотип"
            class="page-header__logo"
          />
          ВЕДЬМАКА
        </v-toolbar-title>
      </router-link>
    </v-app-bar>

    <Header v-else></Header>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      dark
      color="black"
    >
      <v-img
        class="page-header__img mt-3 mb-2"
        src="./assets/header-banner.png"
      />
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="(link,i) in links"
          :key="i"
          :to="link.path"
        >
          {{link.text}}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div class="v-app__container">
      <router-view/>
    </div>
    <Footer></Footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },

  data: () => ({
    drawer: false,
    group: null,
    links: [
      {
        text: 'Главная',
        path: '/',
      },
      {
        text: 'Товары',
        path: 'items',
      },
      {
        text: 'Корзина',
        path: 'cart',
      },
      {
        text: 'Свяжитесь с нами',
        path: 'contactus',
      },
    ],
  }),
  created() {
    window.addEventListener('resize', this.callUpdateWidth);
    this.callUpdateWidth();
  },
  methods: {
    ...mapActions(['callUpdateWidth']),
  },
  computed: {
    ...mapGetters(['isMobile']),
  },
};
</script>

<style lang="scss">
  .v-application {
    font-family: "Mason Chronicles";
  }
  .v-app__container  {
    margin: 0;
    flex-grow: 1;
  }
  .page-header_mobile {
    flex-grow: 0;
    height: fit-content !important;
    .page-header__title {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
    }
    .router-link-active {
      text-decoration: none;
      color: white;
    }
    .page-header__logo {
      width: 4.5rem;
      height: 4.5rem;
    }
    .v-toolbar__content {
      column-gap: calc((100% - 340px)/2)
    }
  }
  @font-face {
    font-family: "Mason Chronicles";
    font-size: normal;
    font-weight: 500;
    src: url("./fonts/masonchronicles.ttf");
  };
</style>
