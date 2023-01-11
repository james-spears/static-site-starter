/* eslint-disable no-undef */
import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import { VitePWA } from 'vite-plugin-pwa';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { data } from './data';

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
        ViteEjsPlugin(data, {
            ejs: (config) => ({
                views: [config.root, join(config.root, '_partials')]
            })
        }),
        imagetools({
            defaultDirectives: (id) => {
                if (id.searchParams.has('hero')) {
                    // the `hero` directive was set on the image
                    return new URLSearchParams('w=720&h=540&webp');
                }
                return new URLSearchParams();
            }
        }),
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
            }
            // devOptions: {
            //     enabled: true
            // }
        })
    ],
    test: {
        root: './'
    }
});
