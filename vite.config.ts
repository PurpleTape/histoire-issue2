/// <reference types="histoire" />

import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import { HstVue } from '@histoire/plugin-vue';

import ui from '@nuxt/ui/vite';

export default defineConfig({
  plugins: [
    vue(),
    ui(),
  ],

  histoire: {
    plugins: [HstVue()],
    setupFile: 'src/histoire.setup.ts',
  },
})
