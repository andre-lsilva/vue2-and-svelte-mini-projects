<template>
  <section>
    <h1>Products</h1>
    <product-item
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :title="product.title"
      :price="product.price"
      :info="product.info"
    />
  </section>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [
        {
          id: "id2",
          title: "Classic hat",
          price: 25.0,
          info: "Useful for any occasion",
        },
        {
          id: "id3",
          title: "Bicycle",
          price: 159.99,
          info: "Gets you anywhere",
        },
      ],
    };
  },
};
</script>

<style>
section {
  width: 50%;
}
</style>
