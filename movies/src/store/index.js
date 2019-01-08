import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    test: 777
  },
  getters: {
    getTest(state) {
      return state.test
    }
  },
  actions: {},
  mutations: {}
})

export default store