import { createRouter, createWebHistory } from 'vue-router';

const  routes = [
    {
      path: '/',
      name: 'page.home',
      component: () => import("../page/Home.vue")
    },
    {
      path: '/members',
      name: 'page.members',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../page/Members.vue')
    },
    {
      path: '/gallery',
      name: 'page.gallery',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../page/Gallery.vue')
    },
    {
      path: '/about',
      name: 'page.about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../page/About.vue')
    }
  ]

const router = createRouter({
  linkActiveClass: 'active-page',
    history: createWebHistory(),
    routes
})

export default router;
