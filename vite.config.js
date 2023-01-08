/* eslint-disable no-undef */
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    appType: 'mpa',
    root: './src',
    publicDir: '../public',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                404: resolve(__dirname, 'src/404.html'),
                login: resolve(__dirname, 'src/login/index.html')
            }
        },
        outDir: '../dist',
        emptyOutDir: true
    },
    plugins: [],
    test: {
        root: './'
    }
});
