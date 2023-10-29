import VueRouter from 'vue-router';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'PageHome',
            component: () => import('./components/PageHome'),
        },
        {
            path: '/login',
            name: 'AuthLogin',
            component: () => import('./components/AuthLogin'),
        },
        {
            path: '/logout',
            name: 'logout',
        },
        {
            path: '/singup',
            name: 'AuthSingup',
            component: () => import('./components/AuthSingup'),
        },
        {
            path: '/users',
            name: 'PageUsers',
            component: () => import('./components/Users'),
        },
        {
            path: '/contacts',
            name: 'PageContacts',
            component: () => import('./components/PageContacts'),
        },
        {
            path: '/about',
            name: 'PageAbout',
            component: () => import('./components/PageAbout'),
        },
        {
            path: '/team',
            name: 'PageTeam',
            component: () => import('./components/PageTeam'),
        },
    ],
    mode: 'history'
});

//сюда надо добавлять роуты, которым нужен доступ через мидлвея
// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem('x_xsrf_token');
//     if (!token) {
//         if (to.name === 'AuthLogin' || to.name === 'AuthSingup') {
//             return next();
//         } else {
//             return next({
//                 name: 'AuthLogin'
//             })
//         }
//     }
    
//     if (token && to.name === 'AuthLogin' || to.name === 'AuthSingup') {
//             return next({
//                 name: 'PageHome'
//             })
//     }

//     next();
// })

export default router