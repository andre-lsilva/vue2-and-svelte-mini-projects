<template>
  <section>
    <h1>Shopping Cart</h1>
    <ul>
      <shopping-cart-item
        v-for="item in shoppingCartItems"
        :id="item.id"
        :key="item.id"
        :title="item.title"
        :price="item.price"
        :info="item.info"
      />
    </ul>
    <p v-if="shoppingCartItems.length === 0">Shopping Cart is empty</p>
  </section>
</template>

<script>
import { mapState } from "vuex";
import ShoppingCartItem from "./ShoppingCartItem.vue";
export default {
  components: {
    ShoppingCartItem,
  },
  computed: {
    ...mapState("shoppingCartModule", ["shoppingCartItems"]),
  },
};
</script>

<style>
section {
  width: 50%;
}

ul {
  list-style: none;
}
</style>
