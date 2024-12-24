import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
          },
          {
            path: '/home',
            name: 'home',
            component: () => import('../views/Home.vue')
          },
          {
            path: '/matrix',
            name: 'matrix',
            component: () => import('../views/Matrix.vue')
          },
          {
            path: '/expandfont',
            name: 'expandfont',
            component: () => import('../views/ExpandFont.vue')
          },
          {
            path: '/navigate',
            name: 'navigate',
            component: () => import('../views/NavigatePage.vue')
          }
    ]
})

export default router