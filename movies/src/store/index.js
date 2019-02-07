import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    popularMovies: [],
    popularSearch: [],
    currentUser: '',
    ax: axios.create({
      baseURL: 'https://api.themoviedb.org/3/movie/popular',
      timeout: 1000,
      params: {
        api_key: '777de1c0359913997a49b6a6fc4096fe'
      }
    }),
    uid: ''
  },
  getters: {
    getPopularMovies({popularSearch}) {
      return popularSearch
    },
    getMovieById({popularMovies}) {
      const getId = id => {
        return popularMovies.filter(item => item.id == id)
      }
      return getId
    },
    getCurrentUser({ currentUser}) {
      return currentUser
    },
    getUid({uid}) {
      return uid
    } 
  },
  actions: {
    fetchPopularMovies ({ commit, state: {ax} }) {
      ax.get()
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
    },
    Login(state, payload) {
      state.currentUser = payload || '';
    },
    setUid(state, payload) {
      state.uid = payload
    }
  }
})

export default store