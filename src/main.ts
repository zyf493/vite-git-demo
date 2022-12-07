import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "../src/router/router";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// import components from 'rafter-pc';
// import 'rafter-pc/rafter-core.esm.css';

const app=createApp(App)
app.use(router)
app.use(ElementPlus)
// app.use(components)
app.mount('#app')
