import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import "aos/dist/aos.css"


import router from './ROUTES'

 const app = createApp(App)
 app.use(router)
 
 app.mount('#app');
 