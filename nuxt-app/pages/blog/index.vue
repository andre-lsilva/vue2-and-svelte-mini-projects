<template>
  <div>
    <h3>Blog</h3>

    <nav>
       <NuxtLink to="/">Go back to the home page</NuxtLink>
    </nav>

    <p>
        You can access inner routes like
        <NuxtLink to="/blog/nestedRoute1">Nested route 1</NuxtLink>
        or
        <NuxtLink to="/blog/nestedRoute2">Nested route 2</NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
}
</script>
