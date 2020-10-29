import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main
  },
  {
    path: "/order/:id",
    name: "order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/OrderDetails/OrderDetails.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
