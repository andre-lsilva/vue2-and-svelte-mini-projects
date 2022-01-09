<script>
  import ProductItem from "../Products/ProductItem.svelte";

  let products = [
    {
      id: "id2",
      title: "Classic hat",
      price: 25.00,
      info: "Useful for any occasion",
    },
    {
      id: "id3",
      title: "Bicycle",
      price: 159.99,
      info: "Gets you anywhere",
    },
  ];
</script>

<section>
  <h1>Products</h1>
  {#each products as product (product.id)}
    <ProductItem
      id={product.id}
      title={product.title}
      price={product.price}
      info={product.info}
    />
  {/each}
</section>

<style>
  section {
    width: 50%;
  }
</style>
