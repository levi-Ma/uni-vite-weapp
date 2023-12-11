import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { HughConfig } from '@hugh-ma/utils'

import 'uno.css'
import App from './App.vue'

HughConfig.apiRoot = 'https://jsonplaceholder.typicode.com/'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()

  app.use(pinia)

  return {
    app,
  }
}
