<template>
  <li>
    <p class="product-title">{{ title }}: €{{ price }}</p>
    <button @click="displayMoreInfo">{{ infoButtonLabel }}</button>
    <button @click="removeFromShoppingCart">Remove Item</button>
    <p v-if="showInfo">{{ info }}</p>
  </li>
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
  data() {
    return {
      showInfo: false,
    };
  },
  computed: {
    infoButtonLabel() {
      return this.showInfo ? "Less Info" : "More Info";
    },
  },
  methods: {
    ...mapActions("shoppingCartModule", ["removeItemFromShoppingCart"]),
    displayMoreInfo() {
      this.showInfo = !this.showInfo;
    },
    removeFromShoppingCart() {
      this.removeItemFromShoppingCart(this.id);
    },
  },
};
</script>

<style>
li {
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
