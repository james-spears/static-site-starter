/* eslint-disable no-undef */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    appType: 'mpa',
    root: './src',
    publicDir: '../public',
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'src/index.html'),
                404: resolve(__dirname, 'src/404.html'),
                contact: resolve(__dirname, 'src/contact/index.html')
            }
        },
        outDir: '../dist',
        emptyOutDir: true
    },
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Static Site Starter',
                short_name: 'Site',
                icons: [
                    {
                        src: '/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                    }
                ],
                theme_color: '#ffffff',
                background_color: '#14b8a6',
                display: 'standalone',
                start_url: '/',
                lang: 'en',
                scope: '/'
            },
            devOptions: {
                enabled: true
            }
        }),
    ],
    test: {
        root: './'
    },
});
