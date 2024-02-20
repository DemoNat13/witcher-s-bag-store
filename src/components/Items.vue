<template>
  <div class="wrapper">
    <div class="bitcoin">
      <p class="bitcoin__rules">
        Возраст Геральта из Ривии сегодня дошел бы до отметки {{ new Date().getFullYear() - 1174}}.
        Несмотря на это, мы идем в ногу со временем, поэтому цены на товары указаны в биткоинах.
        Текущий курс биткоина, дамы и господа, можно лицезреть на вывеске.
      </p>
      <div class="bitcoin__table">
        <img src="../assets/signboard.png">
        <div class="bitcoin__currency">
          <h3 class="bitcoin__currency-header">
            Bitcoin Price Index
          </h3>
          <div
            v-for="(currency, index) in bitcoinCurr"
            :key="index"
            class="currency"
          >
            {{ currency.description }}:
            <span>
              {{ currency.rate_float }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <v-row
      justify-md="start"
      class="mb-3"
    >
      <v-col
        lg="3"
        sm="12"
      >
        <v-select
          v-model="chosenItemsType"
          :items="itemsType"
          label="Фильтр"
          value="type"
          item-value="type"
          item-text="text"
          persistent-hint
          multiple
          chips
          solo
        />
        <v-menu
          bottom
          offset-y
        >
          <v-list>
            <v-list-item
              v-for="(itemsType, i) in itemsType"
              :key="i"
              @click="() => {}"
            >
              <v-checkbox color="black"></v-checkbox>
              <v-list-item-title>{{ itemsType.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <div class="items">
      <div class="items__container">
        <card
          v-for="(item, i) in filteredItems"
          :key="i"
          :item="item"
          class="items__card"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Card from './Card.vue';
import mocData from '../mocData/mocData.json';

export default {
  name: 'Items',
  components: {
    Card,
  },
  data: () => ({
    chosenItemsType: [],
    items: [],
    filteredItems: [],
    shopItems: [],
    itemsType: [
      {
        type: 'potion',
        text: 'Зелье',
      },
      {
        type: 'elixir',
        text: 'Эликсир',
      },
      {
        type: 'decoction',
        text: 'Отвар',
      },
    ],
  }),
  mounted() {
    this.items = mocData;
    this.shopItems = this.items;
    this.filteredItems = this.items;
  },
  computed: {
    ...mapState(['bitcoinCurr']),
  },
  watch: {
    chosenItemsType() {
      if (this.chosenItemsType.length) {
        this.filteredItems = this.chosenItemsType.reduce((acc, filter) => {
          const arr = this.items.filter((item) => item.type === filter);
          acc.push(...arr);
          return acc;
        }, []);
      } else {
        this.filteredItems = this.shopItems;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @media (max-width: 992px) {
    div.bitcoin {
      flex-direction: column;
      .bitcoin__rules {
        width: 100%;
      }
    }
  }
  @media(max-width: 881px) {
    .items,
    .items__container {
      padding: 0;
    }
    .items::before,
    .items__container::before {
      display: none;
    }
  }
  @media (max-width: 768px) {
    div .wrapper {
      margin: 5%;
    }
    div.bitcoin {
      .bitcoin__table {
        img {
          width: 20rem;
          height: 20rem;
        }
      }
      .bitcoin__rules {
        margin: 0;
      }
      .bitcoin__rules,
      .bitcoin__currency .currency {
        font-size: 1rem;
      }
      .bitcoin__currency {
        top: 10rem;
        left: 1.5rem;
        .bitcoin__currency-header {
          font-size: 1.5rem;
        }
      }
    }
  }
  .wrapper {
    margin: 0 6rem 6rem 6rem;
  }
  .bitcoin {
    display: flex;
    position: relative;
    justify-content: space-between;
    column-gap: 1rem;
    margin-bottom: 3.125rem;
    .bitcoin__rules {
      width: 60%;
      margin-top: 6rem;
      font-size: 1.5rem;
    }
    .bitcoin__table {
      position: relative;
      align-self: center;
    }
    .bitcoin__currency {
      position: absolute;
      top: 13rem;
      left: 2rem;
      background-color:rgba(192, 192, 192, 0.3);
      border-radius: 6px;
      .bitcoin__currency-header {
        text-align: center;
        font-size: 2rem;
      }
      .currency {
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
  .items {
      position: relative;
      padding: 35px 0;
    &__container {
      display: grid;
      position: relative;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      row-gap: 3rem;
      padding: 0 25px;
    }
    &__card {
      margin: 0 auto;
    }
  }
  .items::before {
    content: '';
    position: absolute;
    top: 0;
    width: calc(100% - 20px);
    height: 20px;
    background: linear-gradient(to right, rgba(255,255,255,0) 20%,
              rgba(255,255,255,1)), url('../assets/hor-signs.png');
    background-size: contain;
  }
  .items__container::before {
    content: '';
    position: absolute;
    top: -15px;
    height: 101%;
    width: 20px;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 20%,
              rgba(255,255,255,1)), url('../assets/vert-signs.png');
    background-size: contain;
  }
</style>
