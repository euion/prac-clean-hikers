import { createApp } from 'vue';
import App from './App.vue';

import router from './router';
import Antd from 'ant-design-vue';

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import './index.css';

const app = createApp(App);

app.component('Datepicker', Datepicker);

app.use(router);
app.use(Antd);

app.mount('#app');
