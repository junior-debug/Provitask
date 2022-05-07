import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import services from '../views/services.vue'
import signUpProvider from '../views/signUpProvider.vue'
import signUpClient from '../views/signUpClient.vue'
import login from '../views/login.vue'
import joinTo from '../views/joinTo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Locations',
    name: 'Locations',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/locations.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/signUpClient',
    name: 'signUpClient',
    component: signUpClient
  },
  {
    path: '/signUpProvider',
    name: 'signUpProvider',
    component: signUpProvider
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/joinTo',
    name: 'joinTo',
    component: joinTo
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
