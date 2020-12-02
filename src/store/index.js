import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: "",
        token: "",
        role: "",
    },
    mutations: {
        setUsername(state, username) {
            state.username = username
        },
        setToken(state, token) {
            state.token = token
        },
        setRole(state, role) {
            state.role = role
        }
    }
})

export default store

