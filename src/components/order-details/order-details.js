import axios from "axios";

export default {
  name: "OrderDetails",
  props: ["orderId"],
  data() {
    return { orderDetails: {} };
  },
  created() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.orderId}/comments?_limit=1`
      )
      .then(response => {
        console.log("Order details DATA for id", response.data, this.orderId);
        this.orderDetails = response.data[0];
      });
  }
};
