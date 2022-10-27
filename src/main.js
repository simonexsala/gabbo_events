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
  title: "Una notte da Leoni", 
  venue: "all'", 
  location: "Assicura Arena", 
  date: "12 Novembre", 
  address: "Località Acquaviva 4, 38060 Besenello (Trento)" 
}
