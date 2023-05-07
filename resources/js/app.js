import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './components/App';

require('./bootstrap');

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    render: h => h(App),
    router
})
