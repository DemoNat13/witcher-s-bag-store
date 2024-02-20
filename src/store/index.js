import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    widthWindow: 0,
    bitcoinCurr: null,
    potionsInBasket: [],
  },
  getters: {
    isMobile(state) {
      return state.widthWindow < 769;
    },
    isDesktop(state) {
      return state.widthWindow >= 1200;
    },
  },
  mutations: {
    updateWidth(state) {
      state.widthWindow = window.innerWidth;
    },
    setBitcoinCurr(state, data) {
      state.bitcoinCurr = data;
    },
    putItemInBasket(state, potion) {
      const isNewPotion = !state.potionsInBasket.filter((it) => it.item.id === potion.id).length;

      if (!state.potionsInBasket.length || isNewPotion) {
        state.potionsInBasket.push(
          {
            item: potion,
            count: 1,
          },
        );
        return;
      }

      state.potionsInBasket.forEach((it, index) => {
        if (it.item.id === potion.id) {
          state.potionsInBasket[index].count++;
        }
      });
    },
    minusOnePotion(state, item) {
      const index = state.potionsInBasket.indexOf(item);
      if (state.potionsInBasket[index].count === 1) {
        state.potionsInBasket.splice(index, 1);
        return;
      }
      if (index > -1) {
        state.potionsInBasket[index].count--;
      }
    },
    plusOnePotion(state, item) {
      const index = state.potionsInBasket.indexOf(item);

      if (index > -1) {
        state.potionsInBasket[index].count++;
      }
    },
  },
  actions: {
    callUpdateWidth({ commit }, obj) {
      commit('updateWidth', obj);
    },
    callSetBitcoinCurr({ commit }, obj) {
      commit('setBitcoinCurr', obj);
    },
    callPutItemInBasket({ commit }, obj) {
      commit('putItemInBasket', obj);
    },
    callMinusOnePotion({ commit }, obj) {
      commit('minusOnePotion', obj);
    },
    callPlusOnePotion({ commit }, obj) {
      commit('plusOnePotion', obj);
    },
  },
});
