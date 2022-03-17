import '@/assets/css/reset.less'
import 'amfe-flexible'
import { createApp } from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import App from './App.vue'

console.log(axios, vuex)

const app = createApp(App)
app.mount('#root')
