import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/HomeView.vue'
import SiswaView from '../page/SiswaView.vue'
import GalleryView from '../page/GalleryView.vue'
import AboutView from '../page/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "XII RPL 1`23 || Home"
      }
    },
    {
      path: '/siswa',
      name: 'siswa',
      component: SiswaView,
      meta: {
        title: "XII RPL 1`23 || Students"
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
      meta: {
        title: "XII RPL 1`23 || Gallery"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: "XII RPL 1`23 || About"
      }
    },
  ]
})
const title = document.title;
window.addEventListener("blur", () => {
  document.title = "Back Here !!";
});

window.addEventListener("focus", () => {
  document.title = title;
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})
export default router
