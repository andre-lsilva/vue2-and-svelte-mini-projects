import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import NestedRoute1 from "../views/NestedRoute1.vue";
import NestedRoute2 from "../views/NestedRoute2.vue";
import About from "../views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog,
      children: [
          {
              path: "/blog/nested-route1",
              name: "NestedRoute1",
              component: NestedRoute1,
          },
          {
              path: "/blog/nested-route2",
              name: "NestedRoute2",
              component: NestedRoute2,
          },
      ],
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "*",
      component: Home,
    },
  ],
});
