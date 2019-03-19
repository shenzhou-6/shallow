import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import AdminIndex from "./views/AdminIndex";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminIndex,
      children:[
        {
          path: '/article/add',
          name: 'addArticle',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('./views/article/EditArticle.vue')
        },
      ]
    },

  ]
})
