import { createApp } from 'vue'
import App from './App.vue'
import { plugin as formKitPlugin } from '@formkit/vue'
import formKitConfig from '../formkit.config.ts'

const app = createApp(App)
app.use(formKitPlugin, formKitConfig)

app.mount('#app')
