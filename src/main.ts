import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './registerServiceWorker'
import router from './router'

// Bootstrap v5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// ElementPlus Override library default setting
import "./assets/style/scss/element-plus-override.scss";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

// app.use(store);
app.use(pinia);
app.use(router);
app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app');
