<script>
  import shoppingCartItems from "../ShoppingCart/shopping-cart-store.js";

  export let id;
  export let title;
  export let price;
  export let info;

  let showInfo = false;

  $: infoButtonLabel = showInfo ? "Less Info" : "More Info";

  function displayMoreInfo() {
    showInfo = !showInfo;
  }

  function removeFromShoppingCart() {
    shoppingCartItems.removeItemFromShoppingCart(id);
  }
</script>

<li>
  <p class="product-title">{title}: €{price}</p>
  <button on:click={displayMoreInfo}>{infoButtonLabel}</button>
  <button on:click={removeFromShoppingCart}>Remove Item</button>
  {#if showInfo}
    <p>{info}</p>
  {/if}
</li>

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
