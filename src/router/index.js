import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
       meta : {
       title: "Workshop Vue 3"
     }
    },
    {
      path: '/courses',
      name: 'courses',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CourseList.vue'),
     meta : {
       title: "Liste des cours"
     },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Register.vue'),
      meta : {
        title: "Inscription"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue'),
      meta : {
        title: "Connexion"
      }
    },
  ]
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

export default router
