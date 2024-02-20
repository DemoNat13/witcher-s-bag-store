<template>
  <div class="wrapper">
    <div class="shopping-cart">
      <v-toolbar
        elevation="2"
        rounded
        outlined
      >
        <v-toolbar-title class="shopping-cart__title">
          Ваши товары
        </v-toolbar-title>
      </v-toolbar>
      <v-data-table
        :headers="cartHeaders"
        :items="potionsInBasket"
        class="shopping-cart__table elevation-1"
        :mobile-breakpoint="0"
      >
        <template v-slot:no-data>
          <p class="shopping-cart__table-empty">
            Абракадабра, чары-мары, фокус-покус... Корзина все еще пуста.
          </p>
        </template>

        <template v-slot:[`item`]="{item}">
          <tr class="table__row">
            <td class="table__data table__data_bold">
              {{ item.item.title }}
            </td>
            <td class="table__data table__data-quantity">
              <v-btn
                class="data-quantity__btn-add"
                type="button"
                @click="addOnePotion(item)"
                x-small
              >
                +
              </v-btn>
              <span>{{ item.count }}</span>
              <v-btn
                class="data-quantity__btn-remove"
                type="button"
                @click="removeOnePotion(item)"
                x-small
              >
                -
              </v-btn>
            </td>
            <td class="table__data">
              <div class="table__data-container">
                <p>
                  {{ item.item.price }}
                </p>
                <span>₿</span>
              </div>
            </td>
            <td class="table__data">
              <div class="table__data-container">
                <p>
                  {{sumPricePotion(item.item.price, item.count)}}
                </p>
                <span>₿</span>
              </div>
            </td>
          </tr>
        </template>
      </v-data-table>
      <div class="shopping-cart__total-payment">
        <div class="total-payment__img"></div>
        <h2 class="total-payment__header">
          Итоговый счет:
        </h2>
        <span class="total-payment__sum">
          {{totalSumPotions(potionsInBasket)}} ₿
        </span>
        <div class="total-payment__img"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ShoppingCart',
  data: () => ({
    cartHeaders: [
      {
        text: 'Наименование',
        value: 'title',
        sortable: false,
      },
      {
        text: 'Количество',
        value: 'quantity',
        sortable: false,
      },
      {
        text: 'Цена',
        value: 'price',
        sortable: false,
      },
      {
        text: 'Сумма',
        value: 'sum',
        sortable: false,
      },
    ],
  }),
  methods: {
    ...mapActions(['callMinusOnePotion', 'callPlusOnePotion']),
    removeOnePotion(potion) {
      return this.callMinusOnePotion(potion);
    },
    addOnePotion(potion) {
      return this.callPlusOnePotion(potion);
    },
    sumPricePotion(price, count) {
      return (Math.floor((price * count) * 10)) / 10;
    },
    totalSumPotions(arr) {
      const result = arr.reduce((sum, elem) => sum + (elem.count * elem.item.price), 0);
      return (Math.floor(result * 10)) / 10;
    },
  },
  computed: {
    ...mapState(['potionsInBasket']),
  },
};
</script>

<style lang="scss">
  @media(max-width:  992px) {
    .shopping-cart__total-payment {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    div .wrapper {
      margin: 5%;
    }
    .shopping-cart {
      div.shopping-cart__title {
        font-size: 1.5rem;
      }
      div.shopping-cart__table {
        margin-bottom: 1rem;
      }
      p.shopping-cart__table-empty {
        font-size: 1rem;
      }
    }
  }
  .wrapper {
    margin: 6rem 7rem;
    font-family: "Mason Chronicles";
    .shopping-cart__title {
      font-size: 2rem;
      font-weight: bold;
    }
    .shopping-cart__table {
      margin-bottom: 2rem;
      .v-data-table-header th {
        font-size: 1rem;
      }
      .table__row:hover {
        background-color: transparent !important;
      }
      .v-data-table-header th {
        width: 30%;
      }
      .table__data {
        font-size: 1.5rem !important;
      }
      .table__data_bold {
        font-weight: 800;
      }
      .table__data-quantity {
        display: flex;
        column-gap: 0.5rem;
        align-items: center;
        .data-quantity__btn-remove,
        .data-quantity__btn-add {
          max-height: 1.5rem;
          font-size: 1rem;
          font-weight: 600;
        }
      }
      .table__data-container {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        column-gap: 0.5rem;
        align-items: center;
        p {
          width: 2rem;
          margin: 0;
          text-align: center;
        }
        span {
          margin: 0;
          margin-left: 5px;
        }
      }
      .v-data-footer {
        display: none;
      }
    }
    .shopping-cart__table-empty {
      margin: 1.5rem 0;
      font-size: 1.5rem;
    }
    .shopping-cart__total-payment {
      display: flex;
      justify-content:space-around;
      column-gap: 5rem;
      align-items: center;
      .total-payment__sum {
        width: 8rem;
        font-size: 1.5rem;
        text-align: center;
      }
      .total-payment__img {
        background-image: url("../assets/sword.png");
        height: 5rem;
        width: 10rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .total-payment__img:last-child {
        transform: rotate(180deg);
      }
    }
  }
</style>
