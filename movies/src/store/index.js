import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    slug: 'https://api.themoviedb.org/3/movie/popular',
    key: 'api_key=777de1c0359913997a49b6a6fc4096fe',
    options: {
      params: {
        api_key: '777de1c0359913997a49b6a6fc4096fe'
      }
    },
    popularMovies: [],
    popularSearch: []
  },
  getters: {
    getPopularMovies({popularSearch}) {
      return popularSearch
    }
  },
  actions: {
    fetchPopularMovies ({ commit }) {
      axios.get(this.state.slug, this.state.options)
      .then(res => {
        commit('setPopularMovies', res.data.results);
      })
      .catch(err => console.log('Request failed: ' + err.response.statusText))
    },
    setSearchMovies({ commit, state }, searchWord){
      // your code here
      const search = state.popularMovies.filter(
        item => item.title.toLowerCase().includes(searchWord.toLowerCase())
      );
      commit('setSearchMovies', search)
    }
  },
  mutations: {
    setPopularMovies(state, payload) {
      state.popularMovies = [...payload];
      state.popularSearch = [...payload];
    },
    setSearchMovies(state, payload) {
      state.popularSearch = [...payload]
    }
  }
})

export default store