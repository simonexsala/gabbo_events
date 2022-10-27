import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/foto',
      name: 'foto',
      component: () => import('../views/FotoView.vue')
    },
    {
      path: '/prevendite',
      name: 'prevendite',
      component: () => import('../views/PrevenditeView.vue')
    },
    {
      path: '/eventi',
      name: 'eventi',
      component: () => import('../views/EventiView.vue')
    },
    {
      path: '/navette',
      name: 'navette',
      component: () => import('../views/NavetteView.vue')
    },
  ]
})

export default router
