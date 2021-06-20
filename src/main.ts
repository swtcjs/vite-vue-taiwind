import { createApp } from 'vue'
import App from './App.vue'

import * as Icons from "heroicons-vue3/outline"
import '../tailwind.css'

const app = createApp(App)
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key])
})

app.mount('#app')
