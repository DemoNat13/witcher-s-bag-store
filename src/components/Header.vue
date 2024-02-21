<template>
  <div class="page-header">
    <div :class="{'page-header__wrapper': isDesktop }">
      <router-link
        :to="{path: '/'}"
      >
        <div
          class="page-header__title"
        >
          <span>СУМКА</span>
          <img
            src="assets/logo.png"
            width="70"
            height="70"
            alt="Логотип"
          />
          <span>ВЕДЬМАКА</span>
        </div>
      </router-link>
      <div class="page-header__btn-container d-flex justify-center">
        <v-btn
          v-for="(link,i) in links"
          :key="i"
          color="white"
          text
          class="btn-container__btn mx-1"
          :to="link.path">
          {{link.text}}
        </v-btn>
      </div>
    </div>
      <img
        class="page-header__img"
        src="../assets/header-banner.png"
      />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Header',
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
    this.getBitcoinPrice();
  },
  watch: {
  },
  computed: {
    ...mapGetters(['isDesktop']),
  },

  methods: {
    ...mapActions(['callSetBitcoinCurr']),
    getBitcoinPrice() {
      this.$http
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => {
          this.callSetBitcoinCurr(response.data.bpi);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  .page-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem 6rem;
    background-color: black;
    font-family: "Mason Chronicles";
    &__img {
      margin: 0 auto;
    }
  }
  .page-header__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .router-link-active {
    text-decoration: none;
    color: white;
  }
  .page-header__title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }
</style>
