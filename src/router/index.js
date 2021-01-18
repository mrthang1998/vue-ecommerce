import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Content',
      component: () => import('../views/Content.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: ()=>import('../views/Detail.vue')
    }
  ]
})
