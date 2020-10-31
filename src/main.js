import Vue from "vue";
import App from "@/App.vue";
import router from "@/router/router.js";
import store from "@/store/store.js";
import i18n from "@/i18n/i18n.js";
import orderHistory from "order-history-plugin/src/order-history-plugin.js"

Vue.use(orderHistory)
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if (!language) {
    language = process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en";
  }
  i18n.locale = language;
  next();
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
