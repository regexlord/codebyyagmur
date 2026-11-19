import fs from 'fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, Plugin } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIRTUAL_FIREBASE_CONFIG_ID = '\0virtual:firebase-applet-config.json';

function optionalFirebaseConfigPlugin(): Plugin {
  const localConfigPath = path.resolve(__dirname, 'firebase-applet-config.json');
  return {
    name: 'optional-firebase-applet-config',
    resolveId(source) {
      if (source.endsWith('firebase-applet-config.json') && !fs.existsSync(localConfigPath)) {
        return VIRTUAL_FIREBASE_CONFIG_ID;
      }
      return null;
    },
    load(id) {
      if (id === VIRTUAL_FIREBASE_CONFIG_ID) {
        return JSON.stringify({
          projectId: '',
          appId: '',
          apiKey: '',
          authDomain: '',
          firestoreDatabaseId: '',
        });
      }
      return null;
    },
  };
}

export default defineConfig(() => {
  return {
    base: './',
    plugins: [optionalFirebaseConfigPlugin(), react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
