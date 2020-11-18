import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:"/contact",
    name:"Contact",
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  },
  {
    path:"/locations",
    name:"Locations",
    component: () => import(/* webpackChunkName: "about" */ '../views/Locations.vue')
  },
  {
    path:"/schedule",
    name:"Schedule",
    component: () => import(/* webpackChunkName: "about" */ '../views/Schedule.vue')
  },
  {
    path:"/Profile",
    name:"User",
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
