import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Council52 from './pages/Council52.vue'
import Council51 from './pages/Council51.vue'
import Council50 from './pages/Council50.vue'
import Council49 from './pages/Council49.vue'
import Council48 from './pages/Council48.vue'
import Faculties from "./pages/Faculties.vue"
import Apollo from "./pages/Apollo.vue"
import Ares from "./pages/Ares.vue"
import Artemis from "./pages/Artemis.vue"
import Athena from "./pages/Athena.vue"
import Sodache from "./pages/Sodache.vue"
import Elections from "./pages/Elections.vue"
import Links from "./pages/Links.vue"

const routes = [
    { path: '/', component: Home},
    { path: '/council52', component: Council52},
    { path: '/council51', component: Council51},
    { path: '/council50', component: Council50},
    { path: '/council49', component: Council49},
    { path: '/council48', component: Council48},
    { path: '/faculties', component: Faculties},
    { path: '/apollo', component: Apollo},
    { path: '/ares', component: Ares},
    { path: '/artemis', component: Artemis},
    { path: '/athena', component: Athena},
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
