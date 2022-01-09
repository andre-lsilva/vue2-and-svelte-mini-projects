import { writable } from "svelte/store";

function createShoppingCartStore() {
  const shoppingCart = writable([
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
  ]);

  return {
    subscribe: shoppingCart.subscribe,
    addItemToShoppingCart: (item) => {
      shoppingCart.update((items) => {
        return [...items, item];
      });
    },
    removeItemFromShoppingCart: (id) => {
      shoppingCart.update((items) => {
        return items.filter((item) => item.id !== id);
      });
    },
  };
}

export default createShoppingCartStore();
