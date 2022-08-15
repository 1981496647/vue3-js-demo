/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Table } from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'
const app = createApp(App)
app.component('Button', Button)
app.component('Table', Table)
app.use(store).use(router).mount('#app')
