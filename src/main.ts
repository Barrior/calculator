import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/index.scss'

const app = createApp(App).use(store).use(router)

router.isReady().then(() => app.mount('#app'))
