import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KanyeView from '../views/KanyeView.vue'
import QuizView from '../views/QuizView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/kanye',
    name: 'kanye',
    component: KanyeView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
