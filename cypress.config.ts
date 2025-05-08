import { defineConfig } from 'cypress';
import viteConfig from './vite.config';

export default defineConfig({
 component: {
    devServer: {
        port:5173,
        framework: "react",
        bundler: "vite",
        viteConfig,
    },
    specPattern: "cypress/component/**/*.{js,jsx,ts,tsx}",
},
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:3000',
    },
});