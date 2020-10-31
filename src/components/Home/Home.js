import Profile from "@/components/Home/Profile/Profile.vue";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Profile
  },
  computed: { ...mapGetters(["orders"]) },
  methods: {
    orderSelected(orderId) {
      this.$router.push({ name: "OrderDetails", params: { orderId } });
    }
  }
};
