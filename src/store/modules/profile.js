import axios from "axios";

const state = {
  userProfile: {}
};
const getters = {
  userProfile: state => state.userProfile
};
const actions = {
  async fetchProfile({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=1"
    );
    console.log("Profile DATA", response.data);
    commit("setProfile", response.data[0]);
  }
};
const mutations = {
  setProfile: (state, profile) => (state.userProfile = profile)
};

export default {
  state,
  getters,
  actions,
  mutations
};
