<template>
  <v-footer class="footer"
    color="black"
    padless
  >
    <div class="footer__nav py-4">
      <v-btn
        v-for="(link,i) in links"
        :key="i"
        color="white"
        text
        class="mx-1"
        :to="link.path"
      >
        {{link.text}}
      </v-btn>
    </div>
    <div
      class="black py-4 text-center white--text"
    >
      © {{ new Date().getFullYear() }} — <strong>Сумка Ведьмака</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
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
        text: 'Свяжиетсь с нами',
        path: 'contactus',
      },
    ],
  }),
};
</script>

<style lang="scss">
  @media (max-width: 768px) {
    .footer__nav {
      flex-direction: column;
    }
  }
  .footer {
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    font-size: 1.1rem;
  }
  .footer__nav {
    display: flex;
  }
</style>
