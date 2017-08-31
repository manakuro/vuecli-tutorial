import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      // strict: process.env.NODE_ENV !== 'production'
  },
  mutations: {
      GET_TODO(state, todo){
        state.newTodo =  todo
      },
  },
  actions: {
      getTodo({commit}, todo){
        commit('GET_TODO', todo)
      },
  },
  getters: {
    newTodo: state => state.newTodo,
  }
})