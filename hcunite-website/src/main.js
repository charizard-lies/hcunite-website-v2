import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Council52 from './pages/Council52.vue'
import Faculties from "./pages/Faculties.vue"
import Apollo from "./pages/Apollo.vue"
import Sodache from "./pages/Sodache.vue"
import Elections from "./pages/Elections.vue"
import Links from "./pages/Links.vue"

const routes = [
    { path: '/', component: Home},
    { path: '/council52', component: Council52},
    { path: '/faculties', component: Faculties},
    { path: '/apollo', component: Apollo},
    { path: '/sodache', component: Sodache},
    { path: '/elections', component: Elections},
    { path: '/links', component: Links},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
