// @ is an alias to /src

import OrderHistory from "@/components/OrderHistory/OrderHistory.vue";
import Profile from "@/components/Profile/Profile.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Profile,
    OrderHistory
  },
  computed: { ...mapGetters(["orders"]) },
  methods: {
    orderSelected(orderId) {
      this.$router.push({ name: "OrderDetails", params: { orderId } });
    }
  }
};
