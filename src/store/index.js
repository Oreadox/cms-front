import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: "",
        token: "",
        role: "",
        accountId: ""
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
        },
        setAccountId(state, accountId) {
            state.accountId = accountId
        },
    }
})

export default store

