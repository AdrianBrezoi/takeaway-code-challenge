import { mapGetters } from "vuex";

export default {
  name: "UserProfile",
  // methods: {
  //   // TODO: Add action to update profile in module
  //   // ...mapActions(['updateProfile'])
  // },
  computed: { ...mapGetters(["userProfile"]) }
};
