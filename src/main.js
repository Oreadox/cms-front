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

router.beforeEach((to, from, next) => {
    // 不匹配的路由回到/index
    if (to.matched.length === 0) {
        ViewUI.LoadingBar.start();
        next('/index')
        ViewUI.LoadingBar.finish();
        return
    }
    ViewUI.LoadingBar.finish();
    if (to.meta.title) {
        document.title = to.meta.title
    }
    ViewUI.LoadingBar.start();
    if (to.matched[0].meta.login) {
        if (store.state.token) {
            if(store.state.role!==to.matched[0].meta.role){
                next('/index')
                ViewUI.LoadingBar.finish();
                ViewUI.Message.error("当前登录的用户角色与要访问的资源不符")
            } else {
                next()
                ViewUI.LoadingBar.finish();
            }
        } else {
            next('/index')
            ViewUI.LoadingBar.finish();
            ViewUI.Message.error("当前未登录, 请登录后继续")
        }
    } else {
        next()
        ViewUI.LoadingBar.finish();
    }

});
router.afterEach(() => {

})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
}).$mount('#app')


/*router.afterEach(function (transition){
    ViewUI.LoadingBar.finish()
});*/

// })
