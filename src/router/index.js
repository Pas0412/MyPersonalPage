import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Matrix from '../views/Matrix.vue'

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
            component: Home,
          },
          {
            path: '/matrix',
            name: 'matrix',
            component: Matrix
          }
    ]
})

export default router