import VueRouter from 'vue-router';
import Users from './components/Users';

export default new VueRouter({
    routes : [
        {
            path: '/',
            component: Users
        }
    ],
    mode: 'history'
});
