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
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/help',
        name: 'Help',
        component: () =>
            import ( /* webpackChunkName: "help" */ '../views/Help.vue')
    },
    {
        path: '/hotline',
        name: 'Hotline',
        component: () =>
            import ( /* webpackChunkName: "hotline" */ '../views/Hotline.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router