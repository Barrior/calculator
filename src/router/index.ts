import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/rent',
    component: () => import('@/views/Rent.vue'),
    meta: {
      title: '租金收益率',
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
