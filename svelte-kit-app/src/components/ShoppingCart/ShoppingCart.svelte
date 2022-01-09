<script>
  import shoppingCartItems from "../../stores/shopping-cart-store.js";
  import ShoppingCartItem from "./ShoppingCartItem.svelte";

  let allItems;

  shoppingCartItems.subscribe((items) => {
    allItems = items;
  });
</script>

<section>
  <h1>Shopping Cart</h1>
  <ul>
    {#each allItems as item (item.id)}
      <ShoppingCartItem
        id={item.id}
        title={item.title}
        price={item.price}
        info={item.info} />
    {:else}
      <p>Shopping Cart is empty</p>
    {/each}
  </ul>
</section>

<style>
  section {
    width: 50%;
  }

  ul {
    list-style: none;
  }
</style>
