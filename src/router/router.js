import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home/Home.vue";
import i18n from "@/i18n/i18n.js";

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
        component: () => import("@/components/OrderDetails/OrderDetails.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
