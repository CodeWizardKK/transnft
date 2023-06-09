import starportLibrary from '@starport/vue'
import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store).use(router).use(starportLibrary).use(Antd).mount('#app')
