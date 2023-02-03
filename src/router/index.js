import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProductsView from '../views/Products.vue'
import DashboardView from '../views/Dashboard.vue'
import HomeView from '../views/Main.vue'
import BillingView from '../views/Billing.vue'
import DeliveryView from '../views/Delivery.vue'
import VendorsView from '../views/Vendors.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
    ,
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        children:[
          {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView,
          },
          {
            path: '/products',
            name: 'products',
            component: ProductsView,
          },
          {
            path: '/billing',
            name: 'billing',
            component: BillingView,
          },
          {
            path: '/delivery',
            name: 'delivery',
            component: DeliveryView,
          },
          {
            path: '/vendors',
            name: 'vendors',
            component: VendorsView,
          }
        ]
       },
      
      ]
    })

export default router
