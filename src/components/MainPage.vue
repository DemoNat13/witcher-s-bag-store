<template>
  <div class="wrapper">
    <div class="main">
      <p class="main__greetings">Приветствуем Вас, дорогой гость!<br>
       Добро пожаловать в нашу обитель алхимических ингредиентов, превосходных зелий и высокоточного оборудования для их приготовления!<br> У нас Вы найдете все, начиная от зелья Ласточка, заканчивая отваром из Вилохвоста.
      </p>
      <div class="main__items-carousel">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-carousel
              cycle
              :show-arrows="false"
              hide-delimiters
              class="items-carousel"
            >
              <v-carousel-item
                class="items-carousel__item"
                v-for="potion in potions"
                :key="potion.text"
                :src="urlPotion(potion.src)"
              >
                <v-sheet
                  height="100%"
                  color="transparent"
                  tile
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="items-carousel__text">
                      {{ potion.text }}
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
              <v-fade-transition>
                <v-overlay
                  v-if="hover"
                  absolute
                  color="black"
                >
                  <router-link :to="{path: '/items'}">
                    <v-btn class="items-carousel__to-items">
                      Перейти к товарам
                    </v-btn>
                  </router-link>
                </v-overlay>
              </v-fade-transition>
            </v-carousel>
          </template>
        </v-hover>
      </div>
      <div class="main__about-us">
        <h2 class="main__header">O нас</h2>
        <div class="about-us">
          <v-list class="about-us__list">
            <h3 class="list-header">Наши преимущества</h3>
              <v-list-item
                v-for="(advantage, i) in advantages"
                :key="i"
                class="list-item"
              >
                <v-list-item-icon>
                  <v-icon class="list-item__icon">
                    {{advantage.icon}}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="list-item__text">
                    {{advantage.text}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list>
          <v-img src="@/assets/lab.jpg" alt="Лаборатория"/>
        </div>
      </div>
      <div class="main__contacts">
        <h2 class="main__header">Контакты</h2>
        <div class="contacts__container">
          <v-card class="contacts__card">
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <a href="tel:+737 (777) 777-7777">
                    <v-icon class="contacts__card-icon">
                      mdi-phone
                    </v-icon>
                  </a>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="contacts__card-title">
                    <a href="tel:+737 (777) 777-7777" class="contacts__card-tel">
                      +737 (777) 777-7777
                    </a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <a href="tel:+373 (333) 333-3333">
                    <v-icon class="contacts__card-icon">
                      mdi-phone
                    </v-icon>
                  </a>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="contacts__card-title">
                    <a href="tel:+373 (333) 333-3333" class="contacts__card-tel">
                      +373 (333) 333-3333
                    </a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon class="contacts__card-icon">
                    mdi-email
                  </v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="contacts__card-title">
                    witchersbag@lab.tuss
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider inset></v-divider>

              <v-list-item>
                <v-list-item-action>
                  <v-icon class="contacts__card-icon">
                    mdi-map-marker
                  </v-icon>
                </v-list-item-action>

                <v-list-item-content>
                  <v-list-item-title class="contacts__card-title">
                    Империя Нильфгаард, Княжество Туссент, Долина Сансретура, усадьба "Корво Бьянко"</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-img
            class="main__contacts-map"
            src="../assets/map.jpg"
            alt="Карта"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainPage',
  data: () => ({
    selectedItem: 1,
    advantages: [
      {
        text: 'Наша лаборатория признана лучшей среди существующих в Неверленде',
        icon: 'mdi-bottle-tonic-skull-outline',
      },
      {
        text: 'Наши зельевары проходят строжайший отбор и ежеквартально повышают квалификацию',
        icon: 'mdi-doctor',
      },
      {
        text: '9 из 10 ведьмаков почувствовали разницу после первого применения наших зелий',
        icon: 'mdi-sword',
      },
    ],
    potions: [
      {
        text: 'Зелье Ласточка',
        src: 'lastochka.jpg',
      },
      {
        text: 'Зелье Петри',
        src: 'petri-potion.jpg',
      },
      {
        text: 'Волчий час',
        src: 'volchy-chas.jpg',
      },
      {
        text: 'Зелье Косатка',
        src: 'kosatka.jpg',
      },
      {
        text: 'Отвар из катакана',
        src: 'otvar-is-katakana.jpg',
      },
    ],
    absolute: true,
    overlay: false,
  }),
  methods: {
    urlPotion(imgName) {
      // eslint-disable-next-line
      return require(`@/assets/potions/${imgName}`);
    },
  },
  computed: {
  },
};
</script>

<style lang="scss" scoped>
  @media (max-width: 992px) {
    .main .main__contacts {
      .contacts__container {
        flex-direction: column;
        row-gap: 2rem;
        .main__contacts-map {
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 768px) {
    div .wrapper {
      margin: 5%;
    }
    div .main {
      .main__header {
        margin-bottom: 1rem;
        font-size: 2rem;
      }
      .main__greetings,
      .main__items-carousel,
      .about-us {
        margin-bottom: 2rem;
      }
      .main__greetings,
      .about-us .list-item .list-item__text,
      .main__contacts .contacts__card .contacts__card-title,
      .main__contacts .contacts__card .contacts__card-tel {
        font-size: 1.2rem;
      }
      .about-us {
        .list-header {
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
      }
      .main__items-carousel {
        .items-carousel {
          div .items-carousel__text {
            font-size: 3rem;
          }
        }
      }
    }
  }

  .wrapper {
    margin: 8rem 7rem;
  }
  .main {
    background-color: white;
    .main__header {
      margin-bottom: 1.5rem;
      font-size: 3rem;
    }
    .main__greetings {
      margin-bottom:  8rem;
      font-size: 1.5rem;
      text-align: center;
    }
    .main__items-carousel {
      margin-bottom: 5rem;
      .items-carousel {
        margin: 0 auto;
        border: 1px solid black;
        .items-carousel__text {
          font-size: 4rem;
          color: white;
        }
      }
      .items-carousel__to-items {
        width: 20rem;
        height: 5rem;
        font-size: 1.5rem;
      }
    }
    .about-us {
      display: flex;
      flex-direction: column;
      row-gap: 1.25rem;
      margin-bottom: 5rem;
      .list-header {
        margin-bottom: 1.25rem;
        font-size: 1.7rem;
      }
      .list-item__icon {
        margin: 0;
        font-size: 3rem;
        color: black;
      }
      .list-item {
        padding: 0;
        .list-item__text {
          word-wrap: break-word;
          white-space: break-spaces;
          font-size: 1.5rem;
        }
      }
    }
    .main__contacts {
      .contacts__container {
        display: flex;
        column-gap: 2.5rem;
        font-size: 1.5rem;
      }
      .contacts__card {
        .contacts__card-title {
          white-space: break-spaces;
          font-size: 1.4rem;
        }
        .contacts__card-icon {
          color: black;
        }
        .contacts__card-tel {
          font-size: 1.3rem;
          text-decoration: none;
          color: black;
        }
      }
      .main__contacts-map {
        width: 50%;
        height: contain;
      }
    }
  }
</style>
