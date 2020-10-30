import axios from "axios";

export default {
  name: "OrderDetails",
  created:() =>{
    // Fake order details
    axios
        .get("https://jsonplaceholder.typicode.com/posts/1/comments?_limit=2")
        .then(value => {
          console.log("ABR - Order details", value);
        });
  }
};
