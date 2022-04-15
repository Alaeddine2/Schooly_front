import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: 'http://localhost:4000/',
  //timeout: 2000,
  headers: { 'content-type': 'application/json' }
})

Vue.prototype.$http = axiosIns

export default axiosIns
