<template>
  <!-- <v-col cols="auto"> -->
    <v-card
      elevation="7"
      outlined
      class="item-card"
    >
      <v-img
        class="item-card__img"
        :src="urlPotion(item.src)"
        height="250px"
      />
      <v-card-title
        class="item-card__title"
      >
        {{item.title}}
      </v-card-title>
      <v-card-text
        class="item-card__text text--primary"
      >
        {{item.text}}
      </v-card-text>
      <v-card-subtitle
        class="item-card__subtitle"
      >
        {{'Длительность: ' + item.duration + ' сек.'}}
      </v-card-subtitle>
      <div class="item-card__bottom">
        <v-btn
          color="black"
          outlined
          text
          @click="addToBasket"
        >
          В корзину
        </v-btn>
        <p class="bottom__price">
          Цена: {{item.price}} ₿
        </p>
      </div>
    </v-card>
  <!-- </v-col> -->
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
    },
  },
  data: () => ({

  }),
  methods: {
    ...mapActions(['callPutItemInBasket']),

    urlPotion(imgName) {
      // eslint-disable-next-line
      return require(`@/assets/potions/${imgName}`);
    },
    addToBasket() {
      return this.callPutItemInBasket(this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
  .item-card {
    width: 20rem;
    height: fit-content;
    margin: 0;
    font-family: "Mason Chronicles";
    &:hover {
      cursor: pointer;
    };
    .item-card__subtitle,
    .item-card__text,
    .item-card__title {
      padding: 0;
    }
    .item-card__text,
    .item-card__subtitle {
      margin: 0 1rem 1.5rem 1rem;
    };
    .item-card__title {
      margin: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
    };
    .item-card__text {
      width:fit-content;
      font-size: 1.1rem;
      height: 3rem;
      word-wrap: break-word;
    };
    .item-card__img {
      object-fit: fill;
    };
    .item-card__bottom {
      display: flex;
      margin: 1rem;
      justify-content: space-between;
      align-items: center;
      .bottom__price {
        margin: 0;
        font-weight: 700;
      }
    };
  }
</style>
