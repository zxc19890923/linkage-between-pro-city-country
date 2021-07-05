import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/global.scss'
// import VueNativeSock from 'vue-native-websocket-vue3'
import api from './http/api'
const app = createApp(App)
// app.use(VueNativeSock,"wss://192.168.3.60:9002/websocket/123",{
//     store: store
// })
app.config.globalProperties.$api = api
app.use(store).use(router).use(ElementPlus).mount('#app')
