export default {
  name: "NotificationBanner",
  methods: {
    bannerClicked(id) {
      this.$router.push({ name: "OrderDetails", params: { id: id } });
    }
  }
};
