import Vuex from 'vuex'

var store = new Vuex.Store({
    state: {
        username: "",
        token: "",
    },
    mutations: {
        setUsername(state, username) {
            state.username = username
        },
        setToken(state, token) {
            state.token = token
        }
    }
})

export default store

