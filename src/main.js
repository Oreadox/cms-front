import Vue from 'vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from 'axios'
import router from "@/router/router";
import store from "@/store";
import App from "@/App";


Vue.prototype.$axios = axios
Vue.prototype.$baseURI = "http://localhost:8081"
Vue.use(ViewUI)


Vue.config.productionTip = false

axios.interceptors.request.use(res => {
    res.headers.common['token'] = store.state.token || ''
    return res;
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    ViewUI.LoadingBar.start();
    if(to.meta.login)
        if (window.localStorage.getItem('token')){
            next()
        }else {
            next({
                path: '/index',
                query: {redirect: to.fullPath}
            })
        }
    next()
});
router.afterEach(() => {
    ViewUI.LoadingBar.finish();
    // ...
})

/*router.afterEach(function (transition){
    ViewUI.LoadingBar.finish()
});*/

// })
