import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    slug: 'https://api.themoviedb.org/3/movie/popular',
    key: 'api_key=777de1c0359913997a49b6a6fc4096fe',
    popularMovies: []
  },
  getters: {
    getPopularMovies({popularMovies}) {
      const sortedArray = [...popularMovies]
      return sortedArray.sort((a, b) =>
        b.popularity - a.popularity
      )
    }
  },
  actions: {
    fetchPopularMovies ({ commit }) {
      axios.get(`${this.state.slug}?${this.state.key}`)
      .then(res => {
        console.log(res);
        commit('setPopularMovies', res.data.results)
      })
      .catch(err => console.log('Request failed: ' + err.response.statusText))
    }
  },
  mutations: {
    setPopularMovies(state, payload) {
      console.log('test')
      state.popularMovies = [...payload]
    }
  }
})

export default store