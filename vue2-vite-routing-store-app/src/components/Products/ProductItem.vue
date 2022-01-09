<template>
  <div class="product">
    <p class="product-title">{{ title }}: €{{ price }}</p>
    <p>{{ info }}</p>
    <button @click="addToShoppingCart">Add to Shopping Cart</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    title: String,
    price: Number,
    info: String,
    id: String,
  },
  methods: {
    ...mapActions("shoppingCartModule", ["addItemToShoppingCart"]),
    addToShoppingCart() {
      this.addItemToShoppingCart({
        id: this.id,
        title: this.title,
        price: this.price,
        info: this.info,
      });
    },
  },
};
</script>

<style>
.product {
  margin: 10px;
  border-radius: 10px;
  background: #f9eecb;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  padding: 10px;
}

.product-title {
  font-weight: bold;
}
</style>
