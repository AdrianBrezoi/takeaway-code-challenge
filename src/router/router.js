import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import i18n from "@/i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "order/:orderId",
        name: "OrderDetails",
        props: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/OrderDetails/OrderDetails.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
