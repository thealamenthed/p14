import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Configuration Vite pour le projet
 * Configure React et le build
 * @type {import('vite').UserConfig}
 * @see https://vite.dev/config/
 */
export default defineConfig({
  plugins: [react()]
});