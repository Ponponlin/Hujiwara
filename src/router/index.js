import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import memberAdd from '../views/memberAdd.vue'
import memberEdit from '../views/memberEdit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
  {
    path: '/member/add',
    name: 'memberAdd',
    component: memberAdd
  },
  {
    path: '/member/:id',
    name: 'memberEdit',
    component: memberEdit,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
