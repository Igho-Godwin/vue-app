// src/store.js

import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'my-app', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})


const store = new Vuex.Store({

  plugins: [vuexLocalStorage.plugin],

  state: {
    store: [{
      user: ''
    }, {
      loan: ''
    }, {
      initial_setup_data: ''
    },{
      business_categories:[]
    },{
      banks:[]
    }
  ]
  },
  actions: {
    ADD_USER: function ({
      commit
    }, new_user) {
      var set_new = {
        user: new_user,
      };
      commit("ADD_USER_MUTATION", set_new);
    },
    ADD_LOAN_DATA: function ({
      commit
    }, new_loan) {
      var set_new = {
        loan: new_loan
      };
      commit("ADD_LOAN_MUTATION", set_new);
    },
    ADD_INITIAL_SETUP_DATA: function ({
      commit
    }, data) {
      var set_new = {
        data: data,
      };
      commit("ADD_INITIAL_SETUP_MUTATION", set_new);
    },
    ADD_BANK_DATA: function ({
      commit
    }, bankData) {
      var set_new = {
        bankData: bankData
      };
      commit("ADD_BANK_DATA_MUTATION", set_new);
    },
    ADD_BUSINESS_CATEGORIES: function ({
      commit
    }, businessCategories) {
      var set_new = {
        businessCategories: businessCategories
      };
      commit("ADD_BUSINESS_CATEGORIES_MUTATION", set_new);
    },
    CLEAR_STORE: function ({
      commit
    }) {
      commit("CLEAR_STORE");
    },
    CLEAR_INITIAL_SETUP_DATA: function ({
      commit
    }) {
      commit("CLEAR_INITIAL_SETUP_DATA");
    }
  },
  mutations: {
    ADD_USER_MUTATION: function (state, new_user) {
      state.store[0].user = new_user.user;
    },
    ADD_LOAN_MUTATION: function (state, new_loan) {
      state.store[1].loan = new_loan.loan;
    },
    ADD_INITIAL_SETUP_MUTATION: function (state, data) {
      state.store[2].initial_setup_data = data;
    },
    ADD_BUSINESS_CATEGORIES_MUTATION: function (state,data){
      state.store[3].business_categories = data.businessCategories;
    },
    ADD_BANK_DATA_MUTATION: function (state,data){
      state.store[4].banks = data.bankData;
    },
    CLEAR_STORE: function (state) {
      state.store = [];
    },
    CLEAR_INITIAL_SETUP_DATA: function (state) {
      state.store[2].initial_setup_data = '';
    }
  },
  getters: {
    user: (state) => {
      return state.store[0].user;
    },
    loan: (state) => {
      return state.store[1].loan;
    },
    initial_setup: (state) => {
      return state.store[2].initial_setup_data;
    },
    businessCategories: (state) => {
      return state.store[3].business_categories;
    },
    banks: (state) => {
      return state.store[4].banks;
    },
  }
});

export default store;