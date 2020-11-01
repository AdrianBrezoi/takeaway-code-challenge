import axios from "axios";

export default {
  name: "OrderDetails",
  props: ["orderId"],
  methods: {
    backClicked(){
      this.$router.back();
    }
  },
  data() {
    return { orderDetails: {} };
  },
  created() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${this.orderId}/comments?_limit=1`
      )
      .then(response => {
        if (parseInt(this.orderId) === 1){
          this.orderDetails = {restaurant: 'Blue Sakura', status: 'preparing', ...response.data[0]};
        } else {
          this.orderDetails = response.data[0];
        }
      });
  }
};
