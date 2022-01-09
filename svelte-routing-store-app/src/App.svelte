<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./routes/Home.svelte";
  import Blog from "./routes/Blog.svelte";
  import About from "./routes/About.svelte";
</script>

<Router>
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="blog">Blog</Link>
      <Link to="about">About</Link>
    </nav>
  </header>

  <main>
    <Route>
      <Home />
    </Route>

    <Route path="blog/*blogRoute" component={Blog} />

    <Route path="about">
      <About />
    </Route>
  </main>
</Router>

<style>
  nav {
    background: #68cb80;
    font-size: 2rem;
    display: flex;
    justify-content: space-evenly;
  }
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
