import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import * as path from 'path';

const PWA_PLUGIN_OPTIONS: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  injectRegister: false,

  pwaAssets: {
    disabled: false,
    config: true,
  },

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
        form_factor: 'wide',
      },
    ],
  },

  workbox: {
    globPatterns: ['**/*.{ts,js,css,html,ico,png,svg,woff,woff2}'],
    // API CACHING
    runtimeCaching: [
      // MAP CHUNKS CACHING
      {
        urlPattern: /^https:\/\/{s}.tile.openstreetmap.org\/{z}\/{x}\/{y}.png$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'osm-tiles',
          expiration: {
            maxEntries: 120,
            maxAgeSeconds: 10 * 24 * 60 * 60,
          },
        },
      },
      // API CACHING
      {
        urlPattern: ({ url, ...rest }) => {
          return url.href.includes(import.meta.env.VITE_APP_API_URL);
        },
        handler: 'NetworkFirst',
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
};

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      exclude: [],
    }),
    VitePWA(PWA_PLUGIN_OPTIONS),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
