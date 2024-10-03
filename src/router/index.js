import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import { isAuthenticated } from '@/auth'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    beforeEnter: (to, from, next) => {
      // Perform logic before entering the About route
      if (isAuthenticated.value) {
        next();
      } else {
        alert("You need to login first")
        next('/login');
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router