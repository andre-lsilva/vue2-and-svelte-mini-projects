<script>
  import { Router, Route, Link } from "svelte-navigator";
  import NestedRoute1 from "./NestedRoute1.svelte";
  import NestedRoute2 from "./NestedRoute2.svelte";
</script>

<div class="Blog">
  <h3>Blog</h3>

  <nav>
    <Link to="../">Go back to the home page</Link>
  </nav>

  <p>
    You can access nested routes like
    <Link to="nested-route1">Nested route 1</Link>
    or
    <Link to="nested-route2">Nested route 2</Link>
  </p>

  <Router>
    <article>
      <Route path=":id" let:params>
        <h3>Slug: {params.id}</h3>
        <p>Secret route...</p>
      </Route>

      <Route path="nested-route1">
        <NestedRoute1 />
      </Route>

      <Route path="nested-route2">
        <NestedRoute2 />
      </Route>
    </article>
  </Router>
</div>
