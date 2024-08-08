import { createRouter, createWebHistory } from 'vue-router'
import Perfile from '@/views/Perfile.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },*/
    {
      path: '/',
      name: 'perfile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Perfile.vue')
    }
  ]
})

export default router
