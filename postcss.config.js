/**
 * Configuration PostCSS pour le projet
 * Configure Tailwind CSS v4 et Autoprefixer pour le traitement des styles
 * @type {import('postcss-load-config').Config}
 */
export default {
  plugins: {
    /** Plugin PostCSS pour Tailwind CSS v4 */
    "@tailwindcss/postcss": {},
    /** Plugin Autoprefixer pour ajouter automatiquement les préfixes navigateurs */
    autoprefixer: {}
  }
};
