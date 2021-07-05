import { createRouter, createWebHashHistory } from 'vue-router'
import LawyerList from '../views/lawyer/LawyerList.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'lawyerList',
  //   component: LawyerList
  // },
  // // 如果沒有找到路由，重定向到首頁
  // {
  //   path: '/',
  //   redirect: '/case/evidence-list'
  // },
  // {
  //   path: '/legalList',
  //   name: 'legalList',
  //   component: () => import('../views/legal/LegalList.vue')
  // },
  {
    path: '/',
    name: 'editUserinfo',
    component: () => import('../components/lawyer/EditUserinfo.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
