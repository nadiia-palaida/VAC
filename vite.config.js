import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/VAC/',
    plugins: [vue(
        {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag.startsWith('swiper-')
                }
            }
        }
    )],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
            // '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
