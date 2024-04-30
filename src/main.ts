import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Bootstrap v5
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// ElementPlus Override library default setting
import "./assets/style/scss/element-plus-override.scss";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app');
