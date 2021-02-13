import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      status: false,
      profile: {}
    }
  },
  mutations: {
    // Setting the auth status
    setAuthStatus(state, status) {
      state.auth.status = status;
    }
  },
  actions: {
    // This action should do an axios check for log in info
    authLogIn(context) {
      context.commit("setAuthStatus", true);
    },
    // This action can simply log out
    authLogOut(context) {
      context.commit("setAuthStatus", false);
    }
  },
  modules: {}
});
