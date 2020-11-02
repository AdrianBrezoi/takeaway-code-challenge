import { createLocalVue, shallowMount } from "@vue/test-utils";
import languagePicker from "@/components/global/language-picker/language-picker.vue";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

describe("language-picker.vue", () => {
  let i18n;

  beforeEach(() => {
    i18n = new VueI18n({
      locale: "en",
      fallbackLocale: "en",
      messages: { en: {}, de: {} }
    });
  });
  // TODO: Figure out why $i18n is undefined after mount
  xit("Placeholder", () => {
    const wrapper = shallowMount(languagePicker, {
      global: {
        $i18n: i18n
      }
    });
  });
});
