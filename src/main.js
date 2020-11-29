import Vue from 'vue'
import ViewUI from 'view-design';
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'view-design/dist/styles/iview.css';
import axios from 'axios'
import routes from "@/router/routes";
import App from "@/App";


Vue.prototype.$axios = axios
Vue.prototype.$baseURI = "https://mock.yonyoucloud.com/mock/16360"
Vue.use(VueRouter)
Vue.use(ViewUI)
Vue.use(Vuex)


Vue.config.productionTip = false

const router = new VueRouter({
        routes: routes,
        // mode: 'abstract'
        base: '/'
        // routes,
    }
)

new Vue({
    el: '#app',
    router,
    render: h => h(App),
}).$mount('#app')
// })
