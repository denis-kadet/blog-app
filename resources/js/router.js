import VueRouter from 'vue-router';
// import Users from './components/Users';
import AuthLogin from './components/AuthLogin';
import AuthSingup from './components/AuthSingup';
import Home from './components/Home';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'AuthLogin',
            component: AuthLogin
        },
        {
            path: '/logout',
            name: 'logout',
        },
        {
            path: '/singup',
            name: 'AuthSingup',
            component: AuthSingup
        },
    ],
    mode: 'history'
});

// router.beforeEach((to, from, next) => {
// const isLoggedin = window.Laravel.isLoggedin;

// if (isLoggedin == false) {
//     console.log(false);
//     if (to.name === 'login' || to.name === 'registration') {
//         console.log(1);
//         return next();
//     } else {
//         console.log(2);
//         return next({
//             name: 'login'
//         })
//     }
// } else if (isLoggedin == true) {
//     console.log(true);
//     if (to.name === 'login' || to.name === 'registration') {
//         console.log(3);
//         return next({
//             name: 'users'
//         });
//     } else {
//         return next();
//     }
// }


// })

export default router