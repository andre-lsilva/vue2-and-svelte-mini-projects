import Vuex from "vuex";
import shoppingCartModule from "./modules/shopping-cart";

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
      modules: {
        shoppingCartModule,
      },
  });
};
export default createStore;
