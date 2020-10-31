import NotificationBanner from "@/components/Global/NotificationBanner/NotificationBanner.vue";
import Header from "@/components/Global/Header/Header.vue";

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
