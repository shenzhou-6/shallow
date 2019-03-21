import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import AdminIndex from "./views/AdminIndex";
import EditArticle from "./views/article/EditArticle";
import GlobalLayout from "./components/Layout/GlobalLayout";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: GlobalLayout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/article',
      name: 'addArticle',
      component: EditArticle
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
          //component: () => import('./views/article/EditArticle.vue')
          component:EditArticle
        },
      ]
    },

  ]
})
