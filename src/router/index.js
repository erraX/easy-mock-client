import Vue from 'vue'
import VueRouter from 'vue-router'
import Project from '../views/Project'
import Workbench from '../views/Workbench'
import Data from '../views/Data'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/project' },
  {
    path: '/project',
    name: 'project',
    component: Project
  },
  {
    path: '/workbench',
    name: 'workbench',
    component: Workbench
  },
  {
    path: '/data',
    name: 'data',
    component: Data
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
