import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Dashboard',
        breadcrumb: [
          {
            text: 'Dashboard',
            active: true,
          },
        ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: () => import('@/views/Teacher/Teacher.vue'),
      meta: {
        pageTitle: 'Teacher Page',
        breadcrumb: [
          {
            text: 'Teacher Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/teachers/add',
      name: 'teachers-add',
      component: () => import('@/views/Teacher/add.vue'),
      meta: {
        pageTitle: 'Teacher Page',
        breadcrumb: [
          {
            text: 'Teacher Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/employees',
      name: 'employees',
      component: () => import('@/views/Employees/employees.vue'),
      meta: {
        pageTitle: 'employees Page',
        breadcrumb: [
          {
            text: 'employees Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
