import NotificationBanner from "@/components/global/notification-banner/notification-banner.vue";
import Header from "@/components/global/header/header.vue";

import { mapActions } from "vuex";

export default {
  name: "App",
  components: { Header, NotificationBanner },
  methods: {
    ...mapActions(["fetchProfile", "fetchOrders"])
  },
  created() {
    this.fetchProfile();
    this.fetchOrders();
  }
};
