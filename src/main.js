import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);

import GlobalComponents from './plugins/global-components.js'; // Import your plugin
app.use(GlobalComponents);

app.mount('#duper');
