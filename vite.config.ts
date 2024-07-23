import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';
import * as path from 'path';

const PWA_PLUGIN_OPTIONS: Partial<VitePWAOptions> = {
  registerType: 'autoUpdate',
  injectRegister: false,
  includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],

  manifest: {
    name: 'Berlin Parking Finder - Simplified parking search experience',
    short_name: 'Parking Finder',
    description: 'Simplified parking search experience',
    theme_color: '#ffffff',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },

  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    // API CACHING
    runtimeCaching: [
      // MAP CHUNKS CACHING
      {
        urlPattern: /^https:\/\/{s}.tile.openstreetmap.org\/{z}\/{x}\/{y}.png$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'osm-tiles',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 10 * 24 * 60 * 60,
          },
        },
      },
      // API CACHING
      {
        urlPattern: ({ url }) => {
          return url.pathname.startsWith('/api');
        },
        handler: 'NetworkFirst',
        options: {
          cacheName: 'api-cache',
          cacheableResponse: {
            statuses: [0, 201],
          },
        },
      },
    ],
  },
  devOptions: {
    enabled: true,
  },
};

const MANUAL_PWA_PLUGIN_OPTIONS = {
  devOptions: {
    enabled: true,
  },
  includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
  strategies: 'injectManifest',
  srcDir: './src',
  filename: 'service-worker.ts',
  registerType: 'autoUpdate',
  injectManifest: {
    swDest: 'dist/service-worker.ts',
  },

  manifest: {
    name: 'Berlin Parking Finder - Simplified parking search experience',
    short_name: 'Parking Finder',
    description: 'Simplified parking search experience',
    theme_color: '#ffffff', // Change later on
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
};

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),
    // VitePWA(MANUAL_PWA_PLUGIN_OPTIONS),
    VitePWA(PWA_PLUGIN_OPTIONS),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
