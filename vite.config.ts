import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import * as path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      eslintPlugin({
        cache: false,
        include: ['./src/**/*.ts', './src/**/*.tsx'],
        exclude: [],
      }),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: false,

        manifest: {
          name: 'Berlin Parking Finder - Simplified parking search experience',
          short_name: 'Parking Finder',
          description: 'Get the best parking search experience from our app!',
          theme_color: '#ffffff',
          scope: '/',
          start_url: '/',
          icons: [
            {
              src: '/icons/pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png',
            },
            {
              src: '/icons/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/icons/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/icons/maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
          screenshots: [
            {
              src: '/screenshots/screenshot-main.png',
              sizes: '768x1280',
              type: 'image/png',
              form_factor: 'wide',
            },
            {
              src: '/screenshots/screenshot-secondary.png',
              sizes: '768x1280',
              type: 'image/png',
            },
          ],
        },

        workbox: {
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          // API CACHING
          runtimeCaching: [
            // MAP CHUNKS CACHING
            {
              urlPattern: /^https:\/\/[a-z]\.tile\.openstreetmap\.org\/\d+\/\d+\/\d+\.png$/,
              handler: 'CacheFirst',
              options: {
                cacheName: 'osm-tiles',
                cacheableResponse: {
                  statuses: [0, 200],
                },
                expiration: {
                  maxEntries: 120,
                  maxAgeSeconds: 10 * 24 * 60 * 60,
                },
              },
            },
            // API CACHING
            // Doesn't work with functional comparison of pathname. Consider switching to
            // manual service-worker injection and warming up cache with already existing data after first call
            {
              urlPattern: new RegExp(`^${env.VITE_APP_API_URL}/api`),
              handler: 'StaleWhileRevalidate',
              options: {
                cacheName: 'api-cache',
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
