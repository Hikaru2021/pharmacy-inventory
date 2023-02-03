import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

app.use(createPinia())

app.use(router)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')
