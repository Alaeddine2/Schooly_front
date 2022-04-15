import Vue from 'vue'
import Toast from 'vue-toastification'

// Toast Notification Component Styles
import '@core/scss/vue/libs/toastification.scss'


Vue.use(Toast, {
  hideProgressBar: true,
  closeOnClick: false,
  closeButton: false,
  icon: false,
  timeout: 4000,
  transition: 'Vue-Toastification__fade',
})
