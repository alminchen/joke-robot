import Vue from 'vue'
import App from './App'
import router from './router/router';
import Mint from 'mint-ui';
import store from "./store";
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
