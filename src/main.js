import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.$event =  { title: "Terror Party", location: "Rosalpina", date: "1º Novembre", venue: "alla discoteca" }

app.use(createPinia())
app.use(router)

app.mount('#app')
