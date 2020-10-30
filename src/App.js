import NotificationBanner from "@/components/NotificationBanner/NotificationBanner.vue";
import Header from "@/components/Header/Header.vue";

import axios from "axios";

export default {
    name: "App",
    components: {Header, NotificationBanner},
    mounted: () => {
        // Fake user
        axios
            .get("https://jsonplaceholder.typicode.com/users?_limit=1")
            .then(value => {
                console.log("ABR - User Profile", value);
            });

        //Fake order history
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(value => {
                console.log("ABR - Order History", value);
            });

    }
};
