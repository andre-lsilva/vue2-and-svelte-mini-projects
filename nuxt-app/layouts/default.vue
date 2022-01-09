<template>
  <div class="app-container">
    <header>
      <nav class="main-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style>
main {
  text-align: center;
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  main {
    max-width: none;
  }
}
</style>
