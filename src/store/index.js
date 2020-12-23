import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";
Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
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

