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
            name: 'about',
            component: () => import('../views/About.vue')
        },
    
        {
            path: '/contact',
            name: 'conctact',
            component: () => import('../views/Contact.vue')
        },

        {
            path: '/blog-page',
            name: 'blog-page',
            component: () => import('../views/Blog-page.vue')
        },

        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },

        {
            path: '/register',
            name: 'register',
            component: () => import('../views/Register.vue')
        },
    ]
})

const userState = () => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'))
    try {
        if(userInfo.name && userInfo.email){
            return true
        }
    } catch  {
        return false
    }
}

router.beforeEach((to,from, next) =>{
    const userInfo = userState()
    if(to.path === '/' && !userInfo || to.path === '/blog-page' && !userInfo){
        next('login')
    }
    else 
    if(to.path === '/login' && userInfo ){
        next('/')
    }else if(to.path === '/register' && userInfo ){
        next('/')
    }
    else{
        next()
    }
    
}) 


export default router