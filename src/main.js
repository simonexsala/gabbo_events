import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.$event =  { title: "Scream Party", location: "Arena FlyMusic", date: "31 Ottobre", venue: "all'", address: "Località Acquaviva 4, 38060 Besenello (Trento)" }

app.use(createPinia())
app.use(router)

app.mount('#app')
