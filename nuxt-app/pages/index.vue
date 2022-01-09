<template>
  <div>
    <h3>Home page</h3>
    <p>Note: Any unknown route will end up here.</p>

    <div class="container">
      <products />
      <shopping-cart />
    </div>
  </div>
</template>

<script>
import Products from '../components/Products/Products.vue'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart.vue'
export default {
  name: 'HomePage',
  components: {
    Products,
    ShoppingCart,
  },
}
</script>
<style>
.container {
  display: flex;
}
</style>
