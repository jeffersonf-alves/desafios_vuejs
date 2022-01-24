import { createRouter, createWebHistory } from 'vue-router'
import Carrousel from '../views/Carrousel.vue'
import TextEditor from '../views/TextEditor.vue'


const routes = [
  {
    path: '/',
    name: 'carrousel',
    component: Carrousel
  },
  {
    path:'/carrosel',
    nome:'Carrousel',
    component: Carrousel

  },
  {
    path:'/text',
    nome:'text',
    component: TextEditor
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
