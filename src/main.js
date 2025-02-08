import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/fonts.css'
import store from './store/index';
import router from './router'
import VueKinesis from "vue-kinesis";

const app = createApp(App)
app.use(VueKinesis);

app.use(router)

app.use(store);
app.mount('#app')
