import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { firebaseApp } from "@/firebase"
import { VueFire, VueFireAuth } from "vuefire"

const app = createApp(App)


// enable the use of router in pinia stores
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })

app.use(VueSweetalert2);

app.use(pinia)
app.use(router)

app.mount('#app')
