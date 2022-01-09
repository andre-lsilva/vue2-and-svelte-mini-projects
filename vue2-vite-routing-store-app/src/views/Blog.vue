<template>
  <div>
    <h3>Blog</h3>

    <nav>
       <router-link to="/">Go back to the home page</router-link>
    </nav>

    <p>
        You can access inner routes like
        <router-link to="/blog/nested-route1">Nested route 1</router-link>
        or
        <router-link to="/blog/nested-route2">Nested route 2</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
