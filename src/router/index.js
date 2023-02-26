import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/user';
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
       meta : {
       title: "Home | Votre plateforme e-service",
       requiredAuth: false
     }
    },
    {
      path: '/services',
      name: 'services',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Service.vue'),
     meta : {
       title: "E-service | Nos differents services",
        requiredAuth: false
     },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Register.vue'),
      meta : {
        title: "Inscription",
        requiredAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue'),
      meta : {
        title: "Connexion",
        requiredAuth: false
      }
    },

    {
      path: '/create/service',
      name: 'create-service',
      component: () => import('../views/Dashboard/Services/Create.vue'),
      meta : {
        title: "Créer une prestation",
        requiredAuth: true
      }
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard/Index.vue'),
      meta : {
        title: "Tableau de bord",
        requiredAuth: true
      }
    },

    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Category.vue'),
      meta : {
        title: "E-service | Nos differentes categories",
        requiredAuth: false
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
});

router.beforeEach((to, from, next) => {
  const user = useUserStore();
  if(to.meta.requiredAuth && ! user.loggedIn){
    window.location.href = '/login';
  }else{
    next()
  }
});

// redirect guest to deny access to login and register pages
router.beforeEach((to, from, next) => {
  const user = useUserStore();
  if(to.meta.requiredGuest && user.loggedIn){
    window.location.href = '/dashboard';
  }else{
    next()
  }
})

export default router
