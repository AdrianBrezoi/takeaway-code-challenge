import UserProfile from "@/components/home-page/user-profile/user-profile.vue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    UserProfile,
  },
  computed: { ...mapGetters(["orders"]) },
  methods: {
    orderSelected(orderId) {
      this.$router.push({ name: "order-details", params: { orderId } });
    }
  }
};
