import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
//import './assets/main.css'


import "@/assets/demo.min.css"
import "@/assets/tabler.css"
import "@/assets/tabler-vendors.min.css"
import "@/assets/demo.min.js"
import "@/assets/tabler.js"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
