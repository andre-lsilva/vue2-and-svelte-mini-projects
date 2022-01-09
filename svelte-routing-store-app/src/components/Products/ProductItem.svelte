<script>
  import shoppingCartItems from "../ShoppingCart/shopping-cart-store.js";

  export let id;
  export let title;
  export let price;
  export let info;

  function addToShoppingCart() {
    shoppingCartItems.addItemToShoppingCart({
      id,
      title,
      price,
      info,
    });
  }
</script>

<div class="product">
  <p class="product-title">{title}: €{price}</p>
  <p>{info}</p>
  <button on:click={addToShoppingCart}>Add to Shopping Cart</button>
</div>

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
