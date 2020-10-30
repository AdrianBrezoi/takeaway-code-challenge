<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Profile />
    <OrderHistory />
  </div>
</template>

<script>
// @ is an alias to /src

import OrderHistory from "@/components/OrderHistory/OrderHistory.vue";
import Profile from "@/components/Profile/Profile.vue";

export default {
  name: "Main",
  components: {
    Profile,
    OrderHistory
  }
};
</script>
