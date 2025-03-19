import { resolve } from 'path';
import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                catalog: resolve(__dirname, 'pages/_catalog.html'),
                about: resolve(__dirname, 'pages/_about.html'),
                cart: resolve(__dirname, 'pages/_cart.html'),
                cartEmpty: resolve(__dirname, 'pages/_cart-empty.html'),
                product: resolve(__dirname, 'pages/_product.html'),
            },
        },
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'partials'),
        }),
    ],
});