import { shallowMount } from "@vue/test-utils";
import header from "@/components/global/header/header.vue";

describe("header.vue", () => {
  //TODO: Fix error with unresolvable path to asset (lang doesn't seem to be added in path)
  xit("Placeholder", async () => {
    const wrapper = await shallowMount(header, {
      data() {
        return { logoSrc: {} };
      },
      props: {
        lang: "en"
      },
      global: {
        $i18n: { locale: "en" }
      }
    });
  });
});
