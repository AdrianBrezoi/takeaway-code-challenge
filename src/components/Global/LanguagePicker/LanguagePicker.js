export default {
  name: "LanguagePicker",
  methods: {
    localeChanged(locale) {
      this.$router.push({ params: { lang: locale } });
    }
  }
};
