import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/main.scss'
import './plugins/swiper.js'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
