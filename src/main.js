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
  title: "Élite Party", 
  venue: "al ", 
  location: "BondONE", 
  date: "4 Febbraio", 
  address: "Via Pianizza, 27, Trento" 
}
