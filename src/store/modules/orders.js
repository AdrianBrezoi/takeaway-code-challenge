import axios from "axios";

const state = {
    orders: []
};
const getters = {
    orders: (state) => state.orders
};
const actions = {
    async fetchOrders({commit}){
        const response = await  axios
            .get("https://jsonplaceholder.typicode.com/posts?_limit=5");
        console.log('Orders DATA' ,response.data);
        commit('setOrders',response.data);
    }
};
const mutations = {
    setOrders: (state,orders) => (state.orders = orders)
};

export default {
    state,getters,actions,mutations
};