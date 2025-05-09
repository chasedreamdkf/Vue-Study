// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// import ArrayList from "./components/ArrayList.vue";

const app =  createApp(App);
// 全局注册组件
// app.component("ArrayList", ArrayList) // 前面是注册后的组件名，后面是需要的组件，非必要不注册

app.mount('#app');

