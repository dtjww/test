import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { MotionPlugin } from '@vueuse/motion'

const pinia = createPinia()

const myApp = createApp(App)

pinia.use(piniaPluginPersistedstate)

myApp.use(Quasar, quasarUserOptions).use(router)

myApp.use(pinia)

myApp.use(MotionPlugin)

myApp.mount('#app')
