import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null
  },
  getters: {
    loggedIn(state) {
      return state.token !== null;
    }
  },
  mutations: {
    retrieveToken(state, token) {
      state.token = token;
    }
  },
  actions: {
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios
          .post('https://owlf-expense-tracker.herokuapp.com/api/v1/login', {
            email: credentials.email,
            password: credentials.password
          })
          .then(res => {
            const token = res.data;
            resolve(res);
            localStorage.setItem('access_token', token);
            context.commit('retrieveToken', token);
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  },
  modules: {}
});
