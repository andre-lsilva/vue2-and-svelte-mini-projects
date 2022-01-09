import Vue from "vue";
import Vuex from "vuex";
import shoppingCartModule from "./modules/shopping-cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shoppingCartModule,
  },
});
