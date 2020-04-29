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
  name: 'StageZero',
  component: () => import('../views/StageZero.vue')
},
  {
    path: '/stage-1',
    name: 'StageOne',
    component: () => import('../views/StageOne.vue')
},
{
  path: '/stage-2',
  name: 'StageTwo',
  component: () => import('../views/StageTwo.vue')
},
{
  path: '/stage-3',
  name: 'StageThree',
  component: () => import('../views/StageThree.vue')
},
{
  path: '/stage-4',
  name: 'StageFour',
  component: () => import('../views/StageFour.vue')
},
{
  path: '/stage-5',
  name: 'StageFive',
  component: () => import('../views/StageFive.vue')
}
]

const router = new VueRouter({
  routes
})

export default router
