import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Council52 from './pages/Council52.vue'
import Faculties from "./pages/Faculties.vue"
import Apollo from "./pages/Apollo.vue"

const routes = [
    { path: '/', component: Home},
    { path: '/council52', component: Council52},
    { path: '/faculties', component: Faculties},
    { path: '/apollo', component: Apollo},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
