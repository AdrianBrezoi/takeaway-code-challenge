import axios from "axios";

const state = {
    orders: []
};
const getters = {
    orders: state => state.orders,
    activeOrder: state => state.orders.find(order => order.active),
};
const actions = {
    async fetchOrders({commit}) {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        console.log("Orders DATA", response.data);
        const temp = response.data[0];
        response.data[0] = {active: true, status: 'preparing', name: 'Blue Sakura', ...temp}
        commit("setOrders", response.data);
    }
};
const mutations = {
    setOrders: (state, orders) => (state.orders = orders)
};

export default {
    state,
    getters,
    actions,
    mutations
};
