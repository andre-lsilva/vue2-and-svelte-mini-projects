<script>
  import Products from "../components/Products/Products.svelte";
  import ShoppingCart from "../components/ShoppingCart/ShoppingCart.svelte";
</script>

<svelte:head>
  <title>Home Page</title>
</svelte:head>

<h3>Home page</h3>

<div class="container">
  <Products />
  <ShoppingCart />
</div>

<style>
  .container {
    display: flex;
  }
</style>
