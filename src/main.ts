import { createApp } from 'vue'
import { createVfm } from 'vue-final-modal'
import 'virtual:uno.css'
import 'vue-final-modal/style.css'
import '@unocss/reset/normalize.css'
import './style.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'

const vfm = createVfm()
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {},
  },
})
createApp(App).use(vuetify).use(vfm).mount('#app')
