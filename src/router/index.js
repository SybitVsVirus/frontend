import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/Register.vue')
    },
    {
        path: '/hotline',
        name: 'Hotline',
        component: () =>
            import ( /* webpackChunkName: "hotline" */ '../views/Hotline.vue')
    },
    {
        path: '/vision',
        name: 'Vision',
        component: () =>
            import ( /* webpackChunkName: "vision" */ '../views/Vision.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router