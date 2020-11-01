export default {
    name: "LanguagePicker",
    methods: {
        localeChanged() {
            this.$router.push({params: {lang: this.$i18n.locale}});
        }
    }
};
