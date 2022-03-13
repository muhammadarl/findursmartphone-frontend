import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SmartphoneDetailView from '../views/SmartphoneDetailView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/smartphones',
        name: 'smartphone',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SmartphoneView.vue')
    },
    {
        path: '/smartphones/:id',
        name: 'SmartphoneDetailView',
        props: true,
        component: SmartphoneDetailView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router