import VueRouter from 'vue-router';
import Users from './components/Users';
import Login from './components/Login';

export default new VueRouter({
    routes : [
        {
            path: '/',
            component: Users
        },
        {
            path: '/login/',
            component: Login
        },
    ],
    mode: 'history'
});
