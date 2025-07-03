// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [react()],
    base: "/luigi-abenante",
    site: "https://lui-abe.github.io",
});
