import './assets/main.css';

import { defineSetupVue3 } from '@histoire/plugin-vue';
import nuxtUi from '@nuxt/ui/vue-plugin';
import { createRouter, createWebHistory } from 'vue-router';

import App from '@nuxt/ui/components/App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [],
});

export const setupVue3 = defineSetupVue3(({ app, addWrapper }) => {
    app.use(router);
    app.use(nuxtUi);
    addWrapper(App);
});
