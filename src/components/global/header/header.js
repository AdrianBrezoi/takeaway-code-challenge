import LanguagePicker from "@/components/global/language-picker/language-picker.vue";

export default {
  name: "Header",
  props: ["lang"],
  components: { LanguagePicker },
  data() {
    return { logoSrc: {} };
  },
  watch: {
    lang: function(newVal) {
      this.logoSrc = require(`@/assets/logos/horizontal/takeaway-logo-horizontal-${newVal}.svg`);
    }
  },
  created() {
    this.logoSrc = require(`@/assets/logos/horizontal/takeaway-logo-horizontal-${this.lang}.svg`);
  }
};
