export default {
  name: "NotificationBanner",
  methods: {
    bannerClicked(orderId) {
      this.$router.push({ name: "OrderDetails", params: { orderId } });
    }
  }
};
