import { shallowMount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueI18n);
localVue.use(VueRouter);

describe("App.vue", () => {
  let actions;
  let getters;
  let store;
  let i18n;

  beforeEach(() => {
    actions = {
      fetchProfile: jest.fn(),
      fetchOrders: jest.fn()
    };
    getters = {
      activeOrder: jest.fn()
    };
    store = new Vuex.Store({
      actions,
      getters
    });
    i18n = new VueI18n({
      locale: "en",
      fallbackLocale: "en",
      messages: { en: {}, de: {} }
    });
  });

  it('dispatches "fetchProfile" when mounted', async () => {
    await shallowMount(App, { store, i18n, localVue });
    expect(actions.fetchProfile).toHaveBeenCalled();
  });

  it('dispatches "fetchOrders" when mounted', async () => {
    await shallowMount(App, { store, i18n, localVue });
    expect(actions.fetchOrders).toHaveBeenCalled();
  });
  it('Gets "activeOrder" when mounted', async () => {
    await shallowMount(App, { store, i18n, localVue });
    expect(getters.activeOrder).toHaveBeenCalled();
  });
});
