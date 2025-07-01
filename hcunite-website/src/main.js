import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Council52 from './pages/Council52.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/Council52', component: Council52},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
