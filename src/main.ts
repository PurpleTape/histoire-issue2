import './assets/main.css';
import nuxtUi from '@nuxt/ui/vue-plugin';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './app.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [],
});

createApp(App).use(router).use(nuxtUi).mount('#app');
