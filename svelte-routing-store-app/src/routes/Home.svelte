<script>
  import Products from "../components/Products/Products.svelte";
  import ShoppingCart from "../components/ShoppingCart/ShoppingCart.svelte";
</script>

<h3>Home page</h3>
<p>Note: Any unknown route will end up here.</p>

<div class="container">
  <Products />
  <ShoppingCart />
</div>

<style>
  .container {
    display: flex;
  }
</style>
