import Vue from 'vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from 'axios'
import router from "@/router/router";
import store from "@/store";
import App from "@/App";


Vue.prototype.$axios = axios
Vue.prototype.$baseURI = "http://rap2api.taobao.org/app/mock/272096"
Vue.use(ViewUI)


Vue.config.productionTip = false


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')
// })
