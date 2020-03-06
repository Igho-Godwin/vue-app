// src/store.js

import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
    key: 'my-app' ,// The key to store the state on in the storage provider.
    storage: window.localStorage, // or window.sessionStorage or localForage
    // Function that passes the state and returns the state with only the objects you want to store.
    // reducer: state => state,
    // Function that passes a mutation and lets you decide if it should update the state in localStorage.
    // filter: mutation => (true)
  })


const store = new Vuex.Store({

  plugins: [vuexLocalStorage.plugin],

  state: {
    store: [{user:''},{loan:''}]
  },
  actions: {
    ADD_USER: function({ commit }, new_user) {
      var set_new = {
        user: new_user,
      };
      commit("ADD_USER_MUTATION", set_new);
    },
    ADD_LOAN_DATA: function({ commit }, new_loan) {
        var set_new = {
            loan: new_loan,
            status:false
          };
        commit("ADD_LOAN_MUTATION", set_new);
    },
    CLEAR_STORE: function({ commit }) {
      commit("CLEAR_STORE");
  }
  },
  mutations: {
    ADD_USER_MUTATION: function(state, new_user) {
        state.store[0].user = new_user.user;
    },
    ADD_LOAN_MUTATION: function(state, new_loan) {
        state.store[1].loan = new_loan.loan;
    },
    CLEAR_STORE: function(state) {
      state.store = [];
    }
  },
  getters: {
    user: (state) => {
      return state.store[0].user;
    },
    loan: (state) => {
       return state.store[1].loan;
    },
  }
});

export default store;