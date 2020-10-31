import Vue from 'vue';
import Vuex from 'vuex';
import profile from './modules/profile.js';
import orders from './modules/orders.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {profile, orders}
});