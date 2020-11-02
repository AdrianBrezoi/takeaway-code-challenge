import { createLocalVue, shallowMount } from "@vue/test-utils";
import NotificationBanner from "@/components/global/notification-banner/notification-banner.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);
describe("notification-banner.vue", () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      activeOrder: () => {
        return {
          active: true,
          status: "preparing",
          name: "Blue Sakura",
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
      }
    };
    store = new Vuex.Store({
      getters
    });
  });

  it("activeOrder.name is rendered", async () => {
    const wrapper = await shallowMount(NotificationBanner, {
      localVue,
      store,
      mocks: {
        $t: () => "Mocked Translation"
      }
    });
    expect(wrapper.html()).toContain("Blue Sakura");
  });
});
