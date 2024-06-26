import { createApp } from 'vue'
import { i18n } from './plugins/i18n'
import './style.css'
import App from './App.vue'

createApp(App).use(i18n).mount('#app')
