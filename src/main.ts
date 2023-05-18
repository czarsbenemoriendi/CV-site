import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import './style.css'
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'

const vfm = createVfm()

createApp(App).use(vfm).mount('#app')
