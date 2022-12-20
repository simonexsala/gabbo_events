import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import './assets/eventHeader.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

app.config.globalProperties.$event =  { 
  title: "Anniversary Party", 
  venue: "alla ", 
  location: "Rosalpina", 
  date: "27 Dicembre", 
  address: "Via Pianizza, 27, Trento" 
}
