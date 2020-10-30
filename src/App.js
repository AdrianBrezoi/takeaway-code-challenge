import NotificationBanner from "@/components/NotificationBanner/NotificationBanner.vue";
import Header from "@/components/Header/Header.vue";

import axios from "axios";
import {mapActions} from "vuex";

export default {
    name: "App",
    components: {Header, NotificationBanner},
    methods: {
        ...mapActions(['fetchProfile']),
    },
    created() {
        // Fake user
            this.fetchProfile();

        //Fake order history
        axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(value => {
                console.log("ABR - Order History", value);
            });

    }
};
