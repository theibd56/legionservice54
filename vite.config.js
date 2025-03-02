import { resolve } from 'path'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                catalog: resolve(__dirname, '/pages/_catalog.html'),
                about: resolve(__dirname, '/pages/_about.html'),
            },
        },
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ],
})