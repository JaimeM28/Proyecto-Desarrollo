import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/Home.vue'),
        },

        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
    
        {
            path: '/contact',
            name: 'Conctact',
            component: () => import('../views/Contact.vue')
        },
    ]
})

export default router