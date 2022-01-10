const state = {
  shoppingCartItems: [
    {
      id: "id0",
      title: "Vase",
      price: 15.5,
      info: "A glamourous vase",
    },
    {
      id: "id1",
      title: "Umbrella",
      price: 5.5,
      info: "Protects you from the rain!",
    },
  ],
};

const actions = {
  addItemToShoppingCart({ commit }, item) {
    const itemAlreadyExists = state.shoppingCartItems.find(
      (shoppingCartItem) => shoppingCartItem.id === item.id
    );
    if (itemAlreadyExists) {
      return;
    }
    commit('addItemToShoppingCart', item);
  },
  removeItemFromShoppingCart({ commit }, id) {
    commit('removeItemFromShoppingCart', id);
  },
};

const mutations = {
  addItemToShoppingCart(state, item) {
    state.shoppingCartItems.push(item);
  },
  removeItemFromShoppingCart(state, id) {
    const index = state.shoppingCartItems.findIndex((item) => item.id === id);
    state.shoppingCartItems.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
