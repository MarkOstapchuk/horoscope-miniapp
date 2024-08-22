import {defineConfig} from 'vite'
import tailwindcss from 'tailwindcss'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: undefined // Отключает разделение на чанки
            }
        }
    },
    css: {
        postcss: {
            plugins: [tailwindcss()]
        }
    }

})
