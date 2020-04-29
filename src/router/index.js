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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},
{
  path: '/stage-0',
  name: 'Stage 0',
  component: () => import('../views/Stage-0.vue')
},
  {
    path: '/stage-1',
    name: 'Stage 1',
    component: () => import('../views/Stage-1.vue')
},
{
  path: '/stage-2',
  name: 'Stage 2',
  component: () => import('../views/Stage-2.vue')
},
{
  path: '/stage-3',
  name: 'Stage 3',
  component: () => import('../views/Stage-3.vue')
},
{
  path: '/stage-4',
  name: 'Stage 4',
  component: () => import('../views/Stage-4.vue')
},
{
  path: '/stage-5',
  name: 'Stage 5',
  component: () => import('../views/Stage-5.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
