import VueRouter from 'vue-router';
import Users from './components/Users';
import Login from './components/Login';
import Singup from './components/Singup';

export default new VueRouter({
    routes : [
        {
            path: '/',
            name: 'users',
            component: Users
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/logout',
            name: 'logout',
        },
        {
            path: '/singup',
            name: 'singup',
            component: Singup
        },
    ],
    mode: 'history'
});
